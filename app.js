const http = require('http');
const express = require('express');
const messageRoute = require('./routes/messages')
const loginRoute = require("./routes/login");
const errorRoute = require("./routes/error");
const applicationRoute = require('./routes/application')
const bodyParser= require('body-parser')


const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use(loginRoute)
app.use(applicationRoute);
app.use(messageRoute);
app.use(errorRoute)


const server = http.createServer(app);
app.listen(3000);