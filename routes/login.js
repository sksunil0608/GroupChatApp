const express = require("express");
const router = express.Router();

router.get('/login',(req,res,next)=>{

    res.send(`<html>
        <head>
            <title>Group Chat</title>
            <script>
                function savetolocal(username){
                    localStorage.setItem("user",username)
                }
            </script>
        </head>
        <body><h2>Group Chat Login</h2>
            <form action='/application' onsubmit='savetolocal(document.querySelector("#username").value)' method="POST">
                <input id="username" type ="text" name="user">
                <button type="submit">Login</button>
            </form>
        </body>
    </html>`);
});
module.exports = router;