const { getAllBlogs, createBlog, getBlogById, deleteBlogById } = require('../../models/blog.model');

const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        console.log(req.user);
        const result = await getAllBlogs();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});



router.post('/', async (req, res) => {
    try {
        const result = await createBlog(req.body);
        const resultId = await getBlogById(result.insertId)
        res.json(resultId);
    } catch (err) {
        res.json({ error: err.message })
    }
});


router.delete('/:blogId', async (req, res) => {
    try {
        const result = await deleteBlogById(req.params.blogId);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
})




module.exports = router;