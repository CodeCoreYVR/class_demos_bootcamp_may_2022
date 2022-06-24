const express = require('express');
const knex = require('../db/client');

const router = express.Router()

//------------------POST ROUTES---------------------------

//------------------------Index of all Posts: ---------------

// the below path automatically assumes that is has the '/posts' prefixed to it
router.get('/', (req,res) => {
  knex('posts')
  .orderBy('created_at', 'desc')
  .then(posts => {
    res.render('posts/index', {posts: posts})
  })
})

//------------ Render New Post Template----------------
router.get('/new', (req, res) => {
  res.render('posts/new', { post: false });
})

//----------------Create new Post------------------------
router.post('/', (req, res) => {
  knex('posts')
  .insert({
    title: req.body.title,
    image_url: req.body.image_url,
    content: req.body.content
  })
  .returning('*')
  .then(posts => {
    // knex usually returns an array of objects
    // so we use posts[0] to make sure we grab the object we want
    const post = posts[0]
    res.redirect(`posts/${post.id}`)
  })
})

//-----------------Show a single Post----------------------
router.get('/:id', (req, res) => {
  knex('posts')
  .where('id', req.params.id)
  .first() // this will grab the first instance that matches the requirements
  .then(post => {
    if (!post) {
      res.send('No post found')
    } else {
      res.render('posts/show', {post: post})
    }
  })
})


// ------------------Render Edit Post Template--------------
router.get('/:id/edit', (req, res) => {
  knex('posts')
  .where('id', req.params.id)
  .first()
  .then(post => {
    res.render('posts/edit', {post: post})
  })
})

//---------------------Update particular Post---------------
router.patch('/:id', (req, res) => {
  knex('posts')
  .where('id', req.params.id)
  .update({
      title: req.body.title,
      image_url: req.body.image_url,
      content: req.body.content
  })
  .then(() => {
      res.redirect(`/posts/${req.params.id}`)
  })
})

//--------------Delete/Destroy particular--------------
router.delete("/:id", (req, res) => {
  knex('posts')
  .where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/posts')
  })
})

// Remember to export this file as the router, which will be required in
// index.js for all routes related to posts:
module.exports = router;