module.exports=()=>(req,res,next)=>{
   
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,DELETE,HEAD,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','X-Authorization,Content-Type')
    next()
}