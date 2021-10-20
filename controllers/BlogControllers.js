const {Blog} = require("../models")

module.exports = {

    getAllBlogs: async (req, res) => {
        try {
            const allBlogs = await Blog.find().sort({_id: -1 });
            res.json(allBlogs);            
        } catch (error) {
            console.log(error);
        }
    },

    postBlog: async (req, res) => {
        try {
        const newBlogPost = new Blog({
        name: req.body.name, 
        text: req.body.text,
        location: req.body.location,
        comments: req.body.comments,
        });
        
        res.json(await newBlogPost.save())
        } catch (err) {
        res.send(err);
        }
    },        

};
    