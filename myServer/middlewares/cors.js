module.exports=()=>(req,res,next)=>{
   
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Method','*')
    res.setHeader('Access-Control-Allow-Headers','X-Authorization,Content-Type')
    next()
}