import express from 'express';
import Page from '../models/Page.js';
import cloudinary from '../utils/cloudinary.utils.js';
import verifyToken from '../middlewares/verifyToken.js';
import requireAdmin from '../middlewares/requireAdmin.js';

const router = express.Router();

router.post("/add", verifyToken, requireAdmin, async (req, res) => {
    try {
        const { slug: incomingSlug, locale, title, content, tabs } = req.body;

        function slugify(str) {
            return str
                .toLowerCase()
                .trim()
                .replace(/&/g, "and")
                .replace(/@/g, "at")
                .replace(/\+/g, "plus")
                .replace(/%/g, "percent")
                .replace(/[^\p{L}\p{N}\s-]/gu, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-");
        }

        let slug = incomingSlug;

        if (!slug || slug === "new") {
            slug = slugify(title);
        }

        const existing = await Page.findOne({ slug, locale });
        if (existing) {
            return res
                .status(400)
                .json({ error: "Page for this locale already exists." });
        }

        if (locale !== "en") {
            const basePage = await Page.findOne({ slug, locale: "en" });
            if (!basePage) {
                return res.status(400).json({
                    error: "English page must exist before adding translations."
                });
            }
        }

        const page = new Page({ slug, locale, title, content, tabs });
        await page.save();

        res.status(201).json({
            message: "Page created successfully",
            page
        });
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            return res
                .status(400)
                .json({ error: "Page with this slug and locale already exists." });
        }

        res.status(500).json({ error: "Internal server error" });
    }
});

router.put('/update', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { slug, content, locale, title, tabs } = req.body;

        if (!slug || !locale) {
            return res.status(400).json({ error: 'slug and locale are required.' });
        }

        const page = await Page.findOne({ slug, locale });
        if (!page) {
            return res.status(404).json({ error: 'Page not found.' });
        }

        page.title = title ?? page.title;
        page.content = content ?? page.content;

        const tabNameMaker = (slug, index) => {
            return slug
                .replace(/-test$/, "")
                .toLowerCase()
                .replace(/(?:^\w|-\w)/g, m => m.toUpperCase())
                .replace(/-/g, "")
                + "Tab" + (index + 1);
        }

        if (Array.isArray(tabs)) {
            page.tabs = tabs.map((t, index) => {
                const hasCustom = Boolean(t.hasCustomTabContent);

                return {
                    label: t.label,
                    content: t.content,
                    hasCustomTabContent: hasCustom,
                    customTabKey: hasCustom
                        ? tabNameMaker(page.slug, index)
                        : null
                };
            });
        }

        await page.save();
        res.status(200).json({ message: 'Page updated successfully', page });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
});

router.delete("/:slug", verifyToken, requireAdmin, async (req, res) => {
    try {
        const deletedPages = await Page.deleteMany({ slug: req.params.slug });

        if (deletedPages.deletedCount === 0) {
            return res.status(404).json({ error: "No pages found for this slug" });
        }

        res.json({
            message: "Pages deleted successfully",
            count: deletedPages.deletedCount,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
});  

router.get('/get/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const { locale = 'en' } = req.query;

        const page = await Page.findOne({ slug, locale });
        // console.log(slug, locale)
        if (!page) {
            return res.status(404).json({ error: 'Page not found' });
        }

        res.status(200).json(page);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /page/tab
router.delete('/tab', verifyToken, requireAdmin, async (req, res) => {
    try {
        const { slug, locale, tabLabel } = req.body;

        if (!slug || !locale || !tabLabel) {
            return res.status(400).json({ error: "slug, locale, and tabLabel are required" });
        }

        const page = await Page.findOne({ slug, locale });
        if (!page) return res.status(404).json({ error: "Page not found" });

        const initialLength = page.tabs.length;
        page.tabs = page.tabs.filter(tab => tab.label !== tabLabel);

        if (page.tabs.length === initialLength) {
            return res.status(404).json({ error: "Tab not found" });
        }

        await page.save();
        res.status(200).json({ message: "Tab deleted successfully", page });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// GET /page/titles-and-tabs
router.get("/slugs-and-titles", async (req, res) => {
    try {
        const pages = await Page.find(
            {},
            { slug: 1, title: 1, locale: 1, _id: 0 }
        ).sort({ order: 1 });

        const map = new Map();

        for (const page of pages) {
            if (!map.has(page.slug)) {
                map.set(page.slug, {
                    slug: page.slug,
                    en: null,
                    ru: null,
                });
            }

            if (page.locale === "en") {
                map.get(page.slug).en = page.title;
            }

            if (page.locale === "ru") {
                map.get(page.slug).ru = page.title;
            }
        }

        const result = Array.from(map.values())
            .filter(p => p.en) // ensure English exists
            .map(p => ({
                slug: p.slug,
                title: p.ru ? `${p.en} (${p.ru})` : p.en,
            }));

        res.json(result);
    } catch (err) {
        console.error("Error fetching pages:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/gallery", async (req, res) => {
    try {
        const folder = "colouring-project/gallery";
        const result = await cloudinary.search
            .expression(`folder:${folder}`)
            .sort_by("public_id", "desc")
            .max_results(200)
            .execute();

        const images = result.resources.map((r) => r.secure_url);
        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

router.get("/errors", async (req, res) => {
    try {
        const folder = "colouring-project/errors";
        const result = await cloudinary.search
            .expression(`folder:${folder}`)
            .sort_by("public_id", "desc")
            .max_results(50)
            .execute();

        const images = result.resources.map((r) => r.secure_url);
        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

router.get("/list-with-order", async (req, res) => {
    const pages = await Page.find().sort({ order: 1 });

    // 1. Group by slug
    const groups = {};
    pages.forEach((p) => {
        if (!groups[p.slug]) groups[p.slug] = [];
        groups[p.slug].push(p);
    });

    // 2. Convert into one UI entry per slug
    const groupedList = Object.keys(groups).map((slug) => {
        const group = groups[slug];

        // All locales should share the same order.
        // If inconsistent, take the lowest (or highest). Lowest is safer.
        const sharedOrder = Math.min(...group.map((g) => g.order || 999999));

        // We also return titles so admin UI shows the proper name.
        // Prefer English title, else first available.
        const title =
            group.find((g) => g.locale === "en")?.title ||
            group[0].title ||
            slug;

        return {
            slug,
            title,
            order: sharedOrder,
            locales: group.map((g) => g.locale), // optional
        };
    });

    // 3. Sort by unified order
    groupedList.sort((a, b) => a.order - b.order);

    res.json(groupedList);
});


router.put("/reorder", verifyToken, requireAdmin, async (req, res) => {
    const { pages } = req.body;
    if (!Array.isArray(pages)) {
        return res.status(400).json({ error: "Invalid format" });
    }

    const bulkOps = [];

    pages.forEach((p) => {
        bulkOps.push({
            updateMany: {
                filter: { slug: p.slug },
                update: { $set: { order: p.order } },
            }
        });
    });

    try {
        await Page.bulkWrite(bulkOps);
        res.json({ message: "Order updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update order" });
    }
});

  

export default router;
