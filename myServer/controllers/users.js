const router = require('express').Router()
const { register,login,logout }=require('../services/users')
const mapErrors = require('../utils/mapper')
const jwt=require('jsonwebtoken')
const { isGuest, isAuth } = require('../middlewares/guards')



router.post('/register',isGuest() ,async(req,res)=>{
   try{
     if(req.body.password.trim()==''||req.body.email.trim()==''){
          throw new Error('Email and password are required!')
     }
     const result = await register(req.body.email.trim().toLowerCase(),req.body.password.trim())
     res.status(201).json(result)
    } catch(err){
        console.error(err.message)
        const error=mapErrors(err)
        res.status(400).json({message:error})
    }
    console.log('register')
    
 
})

router.post('/login',isGuest() ,async(req,res)=>{
    try{
        if(req.body.password.trim()==''||req.body.email.trim()==''){
             throw new Error('Email and password are required!')
        }
        const result = await login(req.body.email.trim().toLowerCase(),req.body.password.trim())
        res.json(result)
       } catch(err){
           console.error(err.message)
           const error=mapErrors(err)
           res.status(400).json({message:error})
       }
       console.log('login')
     
   })

router.get('/logout', (req,res)=>{
   console.log('logout')
    logout(req.user?.token)
   res.status(204).end()

})


module.exports = router