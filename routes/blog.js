const {Router} = require("express")
const multer = require("multer");
const Blog = require('../models/blog')
const path = require("path")

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

module.exports = router


