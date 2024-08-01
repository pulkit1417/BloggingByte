require('dotenv').config()  

const path = require("path");
const express = require("express");
const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")
const {connectMongoDB} = require("./connection")
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");
const Blog = require("./models/blog")


const app = express();
const PORT = process.env.PORT|| 8000;

connectMongoDB(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
// app.use(express.static(path.resolve("./public")));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', userRoute) 
app.use('/blog', blogRoute)

app.get('/', async (req, res)=>{
  const allBlogs = await Blog.find({});
    res.render("home",{
      user: req.user,
      blogs: allBlogs,
    });
})

app.listen(PORT, () =>{
    console.log("Server Started at Port: "+PORT);
});

