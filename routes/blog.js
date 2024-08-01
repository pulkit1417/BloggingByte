const {Router} = require("express")
const multer = require("multer");
const Blog = require('../models/blog')
const path = require("path")
const Comment = require("../models/comment")

const router = Router();

//Multer storage creation
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads/`))
      },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    }
  });

  const upload = multer({ storage: storage })

router.get('/add-new', (req, res)=>{
    res.render("addBlog",{
        user: req.user,
    })
})

router.post('/add-new', upload.single('coverImage'), async (req, res)=>{
    const {title, body} = req.body;
    const user = req.user;

    const blog = await Blog.create({
        title,
        body,
        coverImage: `/uploads/${req.file.filename}`,
        createdBy: user._id
    })
    res.redirect(`/blog/${blog._id}`)
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('createdBy');
    if (!blog) {
      return res.status(404).send('Blog post not found');
    }
    const comments = await Comment.find({ blogId: req.params.id }).populate('createdBy');
    
    res.render('blog', {
      blog,
      comments,
      user: req.user // Pass user data if available
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post("/comment/:blogId", async (req, res) => {
  await Comment.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.user._id,
  });
  return res.redirect(`/blog/${req.params.blogId}`);
});

router.get('/search/:key', async (req, res) => {
  try {
    const key = req.params.key;
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: key, $options: 'i' } },
        { body: { $regex: key, $options: 'i' } },
      ],
    });
    res.render('home', { blogs, searchTerm: key });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during search');
  }
});

module.exports = router


