const express = require('express');
const router = express.Router();
posts={}
router.get("/", async(req,res)=>{
    res.json(posts)
})

router.post("/",async(req,res)=>{
posts=req.body
console.log(post)
})
module.exports = router;