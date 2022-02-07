const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')


const router = express.Router()

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../views/index.html'));
    res.render('home')
})

router.get('/blog', (req, res) => {
    res.render('bloghome', {
        blogs: blogs
    });
    // res.sendFile(path.join(__dirname, '../views/bloghome.html'));
})

router.get('/blogpost/:slug', (req, res) => {
    myblog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })

    res.render('blogpage', {
        title: myblog[0].title,
        content: myblog[0].content
    });
    // console.log(myblog)
    // res.sendFile(path.join(__dirname, '../views/blogpage.html'));

})
module.exports = router 
