const express=require('express')
const session=require('express-session')
const dotenv=require('dotenv')
const ejs=require('ejs')
const mongoose=require('mongoose')
const MongoDBStore = require('connect-mongodb-session')(session);
const app=express()
app.use(express.urlencoded({extended:false}));
mongoose.connect(process.env.connect)
