// routes/index.js

const express = require('express');
const router = express.Router();

// Sample data (replace with your actual data handling)
let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', comments: [] },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', comments: [] },
    // Add more posts as needed
];

// Display all posts
router.get('/', (req, res) => {
    res.render('index', { posts });
});

// Display form to create a new post
router.get('/create', (req, res) => {
    res.render('create');
});

// Handle form submission to create a new post
router.post('/create', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content, comments: [] };
    posts.push(newPost);
    res.redirect('/');
});

// Display form to edit a post
router.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        res.sendStatus(404);
        return;
    }
    res.render('edit', { post });
});

// Handle form submission to edit a post
router.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        res.sendStatus(404);
        return;
    }
    posts[postIndex].title = title;
    posts[postIndex].content = content;
    res.redirect('/');
});

// Handle adding a comment to a post
router.post('/comment/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { comment } = req.body;
    const post = posts.find(post => pos
