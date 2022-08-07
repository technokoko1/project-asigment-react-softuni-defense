const {model,Schema,Types:{ObjectId}}=require('mongoose')

url='https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
const schema=new Schema({
    title: {type:String, required:[true, "Name required!"]},
    description: {type:String},
    image: {type:String, default: url},
    price: {type:Number, min:[0,'Price cant be negative!']},
    owner:{type:ObjectId,ref:"User"}
})

const Item=model('Item',schema)

module.exports=Item