const {model,Schema}=require('mongoose')

let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}
const user=new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    hashedPassword:{type: String,
        trim: true,
        required: 'Password  is required',
    },
  
     
  
})
user.index({email:1},{
    collation:{
        locale:'en',
        strength:1
    }
})


const User=model('User',user)

module.exports=User