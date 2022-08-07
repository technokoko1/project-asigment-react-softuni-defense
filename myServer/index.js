const express=require('express')
const mongoose=require('mongoose')

const cors=require('./middlewares/cors')
const catalogControler=require('./controllers/catalog')
const usersControler=require('./controllers/users')
const auth = require('./middlewares/auth')
start()
async function start(){

    try{
        await  mongoose.connect('mongodb://localhost:27017/fitnessStore',{
            
            useUnifiedTopology:true,
            useNewUrlParser:true,
            
        })
        console.log('Database conected!')
    }catch(err){
        console.log('Database conection Failed!')
        process.exit(1)
    }

 
  
const app=express()
app.use(express.json())
app.use(cors())
app.use(auth())
app.use('/data/catalog',catalogControler)
app.use('/users/',usersControler)

app.get('/',(req,res)=>res.json({hello:"world"}))
app.listen(3030,()=>console.log('Rest service started at 3030'))
}