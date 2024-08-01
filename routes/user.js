const express = require('express');
const router =  express.Router();
const User = require("../models/user")
const Blog  = require("../models/blog")

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

router.get('/logout', (req, res)=>{
    return res.clearCookie("token").redirect('/');
})

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        
        // Fetch blogs for this user
        const blogs = await Blog.find({ createdBy: req.params.id })
                                .sort({ createdAt: -1 })
                                .limit(10); // Limit to 10 most recent blogs

        res.render('profile', { user, blogs });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
}); 

module.exports = router;