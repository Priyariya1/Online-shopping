if(process.env.NODE_ENV !=='production' ){
    require('dotenv').config()
}
const express =require ('express')
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const session = require ('express-session')
const passport =require('passport')
const { PrismaClientUnknownRequestError } = require('@prisma/client/runtime/library');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const prisma = new PrismaClient()
const { v4: uuidv4 } = require('uuid');
const app = express()



const initializePassport = require('../passport-config.js')
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const users = [
    {
        email:"priya@gmail.com",
        password:12345
    }
]

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(passport.initialize())
app.use(passport.session())



// ========= get user ===========

router.get('/users',authenticateToken, async (req, res, next) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users.filter(post => post.username===req.user.name))

    } catch (error) {
        next(error)

    }
})



// =========== login ==============

router.post('/login',(req,res)=>{
    // Authenticate User

    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})



function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token ==null) 
    return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) 
        return res.sendStatus(403)
        req.user =user
    next()
    })
}

module.exports = router;