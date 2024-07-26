const express = require('express');
const router =  express.Router();
const User = require("../models/user")

router.get('/login',(req, res) =>{
    return res.render("login")
});

router.get('/signin',(req, res) =>{
    return res.render("signin")
});

router.post('/login',async(req, res)=>{
    const {email, password} = req.body;
    try{
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect('/')

    } catch(error){
        return res.render("login",{
            error:"Incorrect email or password",
        });
    }
});

router.post('/signin', async (req, res)=>{
    const {fullName, email, password} = req.body;
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect('/')
});

module.exports = router;