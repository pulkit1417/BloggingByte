const path = require("path");
const express = require("express");
const userRoute = require("./routes/user")

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended: true}));
app.use('/user', userRoute)

app.get('/', (req, res)=>{
    res.render("home");
})

app.listen(PORT, () =>{
    console.log("Server Started at Port: "+PORT);
});

