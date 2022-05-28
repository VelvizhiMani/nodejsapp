const express = require('express');
const router = express.Router();
const Post = require('../models/Storage');


// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        // const posts = await Post.find().limit(1);
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// SUBMITS A POST
router.post('/', async (req, res) => {
    try {
        const post = new Post({
            storagename: req.body.storagename,
            storageurl: req.body.storageurl,
            status: "Active",
            adduer:'1',
            updateuser:""
        });
        const savePost = await post.save();
        res.json(savePost);
    }
    catch (err) {
        res.json({ message: err });
    }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId)
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json({ message: err });
    }
});

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
    try {
            const updatedPost = await Post.updateOne(
                { _id: req.params.postId },
                { $set: { 
                    storagename: req.body.storagename,
                    storageurl: req.body.storageurl,
                    updatedate: new Date(),
                    updateuser:"1"
                } }
            );
            res.json(updatedPost);
       
       
    }
    catch (err) {
        res.json({ message: err });
    }
})

//DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removePost);
    }
    catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;