const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require("multer");
const {connection}=require('../database/sql');
router.use(bodyParser.json());

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images/")
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

var upload = multer({storage});



router.post('/',upload.single("file"),(req,res)=>{
    const title = req.query.title;
    const file = req.file.filename;
    const quill = req.query.quill;
    console.log(title,file,quill);


    const data={
        title:title,
        picture:file,
        text:quill
    }
    connection.query('INSERT into tiersblog SET ?', data, (err,res)=>{
        if (err) throw err;
        else{
            console.log("data stored");
            // res.redirect('http://localhost:3000')
        }
    })
    
});

module.exports=router;