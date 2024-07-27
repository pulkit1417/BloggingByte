const path = require("path");
const express = require("express");
const userRoute = require("./routes/user")
const {connectMongoDB} = require("./connection")
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app = express();
const PORT = 8000;

connectMongoDB("mongodb://localhost:27017/Blogify")
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


app.use('/user', userRoute) 
app.get('/', (req, res)=>{
    res.render("home",{
      user: req.user,
    });
})

app.listen(PORT, () =>{
    console.log("Server Started at Port: "+PORT);
});

