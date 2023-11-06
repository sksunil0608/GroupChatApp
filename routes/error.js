const express = require("express");
const router = express.Router()
router.use((req,res,next)=>{
    res.status(404).send("<h1>Error: Error Code : 404</h1>")
})
module.exports = router;