const router = require('express').Router();

const {getAllBlogs, postBlog} = require("../controllers/BlogControllers")

router.get("/", getAllBlogs);
router.post("/", postBlog)

        

module.exports = router;