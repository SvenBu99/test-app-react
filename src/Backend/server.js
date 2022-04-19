const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt.js');
const expressSession = require("express-session");
const bodyParser = require('body-parser')

const app =express()

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000, () => {
    console.log("Server has started")
})