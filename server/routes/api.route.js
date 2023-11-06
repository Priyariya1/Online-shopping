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
        email:"priya",
        password:12345
    },
    {
       email:"ramya",
       password:67890
    }
]

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialize: false
}))
app.use(passport.initialize())
app.use(passport.session())



// ========= get user ===========

router.get('/users',passport.authenticate, async (req, res, next) => {
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

// ========== signup =============

router.post('/signup', async (req, res, next) => {
    try {

        const user = await prisma.user.create({
            data: req.body
        })
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log(error)
        next(error)

    }
});

// ========= rename =============

router.patch('/users/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const user = await prisma.user.update({
            where: {
                id: Number(id),
            },
            data: req.body,

        })
        res.json(user)
    } catch (error) {
        console.log(error)
        next(error)

    }
})

// ============= find user =========


router.get('/users/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id),
            },

        })
        res.json(user)
    } catch (error) {
        next(error)

    }
})

// =========  delete user =========

router.delete('/users/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const deleteUser = await prisma.user.delete({
            where: {
                id: Number(id),
            },
        })
        res.json(deleteUser)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

// ========== all products =========
router.get('/products', async (req, res, next) => {
    try {
        const products = await prisma.product.findMany()

        res.json({ products })

    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

// ========= create products =======


router.post('/products', async (req, res, next) => {

    try {
       const product = await prisma.product.create({
            data: req.body
        })
        console.log(product)
        res.json(product)
    }
    catch (error) {
        console.log(error)
        next(error)
    }

})


// ============  find products=========

router.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const product = await prisma.product.findUnique({
            where: {
                id: Number(id),
            },
            include: { category: true }

        })
        console.log(product.quantity)
        res.json(product)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

// =========== deleteproduct==========

router.delete('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const deleteProduct = await prisma.product.delete({
            where: {
                id: Number(id),
            },
        
        
    })
        console.log('Deleted sucessfuly')
        res.json(deleteProduct)
    } catch (error) {
        console.log(error)
        next(error)
    }
})

// ======= update product=======

router.patch('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const product = await prisma.product.update({
            where: {
                id: Number(id),
            },
            data: req.body,
            include: { category: true }
        })
        res.json(product)

    } catch (error) {
        console.log(error)
        next(error)
    }

})

// ========== all  cateories =========

router.get('/category', async (req, res, next) => {
    try {
        const category = await prisma.category.findMany()

        res.json({ category })

    }
    catch (error) {
        console.log(error)
        next(error)
    }
})

router.post('/category', async (req, res, next) => {

    try {
       const category = await prisma.category.create({
            data: req.body
        })
        console.log(category)
        res.json(product)
    }
    catch (error) {
        console.log(error)
        next(error)
    }

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