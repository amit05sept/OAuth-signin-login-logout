const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.render("login");
});

router.get("/google",(req,res)=>{
    res.send("handle with passport");
});
router.get("/logout",(req,res)=>{
    res.send("handle logout with passport");
});


module.exports=router;