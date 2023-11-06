const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post("/", (req, res, next) => {
    
    const message = req.body;
    fs.appendFileSync("message.txt",`${message.username}:${message.message}`);
    res.redirect('/');
});

router.get("/", (req,res,next)=>{
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
    res.send(`<html>
            <head>
                <title>Group Chat</title>       
            </head>
            <body>
                <h1> Messages </h1>
                <p>${data}</p>
                <form action='/' onsubmit ="document.querySelector('#user').value =localStorage.getItem('user')" method ="POST">
                    <input type ="text" name="message">
                    <input id="user" type="hidden" name="username">
                    <button type="submit">Send</button>
                </form>
            </body>
        <html>`);
    }
    )
});
module.exports = router;