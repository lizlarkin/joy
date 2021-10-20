const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    name: {
        type: "String",
        required: "Name is required"
    },
    text: {
        type: "String",
        trim: true, 
        required: "Text is required",
    },
    location: {
        type: "String",
    },
    comments: [],
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;