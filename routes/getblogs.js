const express = require('express');
const router = express.Router();
const {connection} = require('../database/sql');

router.get('/',(req,response)=>{
    connection.query('SELECT * from tiersblog', (err,res)=>{
        if (err) throw err;
        else{
            // response.status(200).json({message:"Data Fetched Successfully",data:res})
            console.log(res)
            response.send(res);

        }
    })
})

module.exports=router;