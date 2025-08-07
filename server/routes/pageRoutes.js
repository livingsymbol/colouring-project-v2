import express from 'express';
import Page from '../models/Page.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const { slug, locale, title, sections } = req.body;

        const page = new Page({ slug, locale, title, sections });
        await page.save();

        res.status(201).json({ message: 'Page created successfully', page });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Page with this slug and locale already exists.' });
        }
        res.status(500).json({ error: error.message });
    }
});

router.post('/update', async (req, res) => {
    try {
        const { slug, locale, title, sections } = req.body;

        if (!slug || !locale) {
            return res.status(400).json({ error: 'slug and locale are required.' });
        }

        const page = await Page.findOne({ slug, locale });

        if (!page) {
            return res.status(404).json({ error: 'Page not found.' });
        }

        if (title) page.title = title;

        if (Array.isArray(sections)) {
            sections.forEach(newSection => {
                const index = page.sections.findIndex(sec => sec.label === newSection.label);

                if (index !== -1) {
                    page.sections[index].content = newSection.content;
                } else {
                    page.sections.push(newSection);
                }
            });
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

        if (!page) {
            return res.status(404).json({ error: 'Page not found' });
        }

        res.status(200).json(page);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /page/titles-and-sections
router.get("/titles-and-sections", async (req, res) => {
    try {
        const pages = await Page.find({}, { slug: 1, title: 1, "sections.label": 1 });

        const result = pages.map(page => ({
            slug: page.slug,
            title: page.title,
            sections: page.sections.map(section => section.label),
        }));

        res.json(result);
    } catch (err) {
        console.error("Error fetching pages:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;
