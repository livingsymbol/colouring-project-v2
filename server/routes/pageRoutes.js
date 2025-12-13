import express from 'express';
import Page from '../models/Page.js';
import cloudinary from '../utils/cloudinary.utils.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { slug, content, locale, title, tabs } = req.body;

        const page = new Page({ slug, locale, title, content, tabs });
        await page.save();

        res.status(201).json({ message: 'Page created successfully', page });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Page with this slug and locale already exists.' });
        }
        res.status(500).json({ error: error.message });
    }
});

// router.put('/update', async (req, res) => {
//     try {
//         const { slug, content, locale, title, tabs } = req.body;

//         if (!slug || !locale) {
//             return res.status(400).json({ error: 'slug and locale are required.' });
//         }

//         const page = await Page.findOne({ slug, locale });

//         if (!page) {
//             return res.status(404).json({ error: 'Page not found.' });
//         }

//         if (title) page.title = title;

//         if (content) page.content = content;

//         if (Array.isArray(tabs)) {
//             tabs.forEach(newTab => {
//                 const index = page.tabs.findIndex(sec => sec.label === newTab.label);

//                 if (index !== -1) {
//                     page.tabs[index].content = newTab.content;
//                 } else {
//                     page.tabs.push(newTab);
//                 }
//             });
//         }

//         await page.save();
//         res.status(200).json({ message: 'Page updated successfully', page });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

router.put('/update', async (req, res) => {
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

        if (Array.isArray(tabs)) {
            page.tabs = tabs.map(t => ({
                label: t.label,
                content: t.content
            }));
        }

        await page.save();
        res.status(200).json({ message: 'Page updated successfully', page });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/get/:slug', async (req, res) => {
    try {
        const { slug } = req.params;
        const { locale = 'en' } = req.query;

        const page = await Page.findOne({ slug, locale });
        console.log(slug, locale)
        if (!page) {
            return res.status(404).json({ error: 'Page not found' });
        }

        res.status(200).json(page);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /page/tab
router.delete('/tab', async (req, res) => {
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
router.get("/titles-and-tabs", async (req, res) => {
    try {
        const pages = await Page.find({}, { slug: 1, title: 1, "tabs.label": 1 });

        const result = pages.map(page => ({
            slug: page.slug,
            title: page.title,
            tabs: page.tabs.map(tab => tab.label),
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

export default router;
