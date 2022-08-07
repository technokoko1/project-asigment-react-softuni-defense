function isAuth(){
    return (req,res,next)=>{
       if(req.user){
           next()
       }else{
         res.status(401).json({message:'Please Log in!'})
       }
    }
}

function isGuest(){
    return (req,res,next)=>{
       if(!req.user){
           next()
       }else{
         res.status(400).json({message:'You are already loged in!'})
       }
    }
}

function isOwner(){
    return (req,res,next)=>{
       if(req.user&&req.user._id==res.locals.item.owner){
           next()
       }else{
         res.status(403).json({message:'You cant modify this record!'})
       }
    }
}

module.exports={
    isAuth,
    isGuest,
    isOwner
}