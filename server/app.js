const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
require('dotenv').config();
const passport = require('passport')


const DBSOURCE = "usersdb.sqlite";



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', async (req,res,next)=>{
    res.send({message: 'awesome it works'});

})

app.use('/api',require('./routes/api.route'));

app.use((req,res,next)=>{
    next(createError.NotFound());
});

app.use((err,req,res,next)=>{
    res.status(err.status|| 500);
    res.send({
        status:err.status||500,
        message: err.message,
    })
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`@http://localhost:${PORT}`));