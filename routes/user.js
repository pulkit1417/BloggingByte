const express = require('express');
const router =  express.Router();
const User = require("../models/user")

router.get('/login',(req, res) =>{
    return res.render("login")
});

router.get('/signin',(req, res) =>{
    return res.render("signin")
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