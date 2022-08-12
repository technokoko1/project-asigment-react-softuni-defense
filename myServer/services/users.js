const User=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const JWT_SECRET='asdasdasdad'
//random string
const blackList=[]

async function register(email,password){
const existing=await User.findOne({email:new RegExp(`^${email}$`,'i')})

if (existing){
    throw new Error('Email already exists')
}
const user= new User({
    email,
    hashedPassword:await bcrypt.hash(password,10)
})
   
  await user.save()
    
  return {
    email:user.email,
    _id:user._id,
    accessToken:createToken(user)
  }

}

async function login(email,password){
    
    const user=await User.findOne({email:new RegExp(`^${email}$`,'i')})
      console.log(user)
    if (!user){
        throw new Error('Incorect email or password')
    }
     const match =await bcrypt.compare(password,user.hashedPassword)
       
        if(!match){
            throw new Error('Incorect email or password')
        }
      return {
        email:user.email,
        _id:user._id,
        accessToken:createToken(user)
      }
}

function logout(token){
blackList.push(token)
}

function createToken(user){
    const token=jwt.sign({
        email:user.email,
        _id:user._id
    },JWT_SECRET)
    return token
    }
   
    function verifySession(token){
        if (blackList.includes(token)){
            throw new Error('Token is invalidated')
        }
       const payload= jwt.verify(token,JWT_SECRET)

       return{
        email:payload.email,
        _id:payload._id,
        token
       }
    }

module.exports={
    register,
    login,
    logout,
    verifySession
}