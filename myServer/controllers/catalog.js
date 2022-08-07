const router = require('express').Router()
const { response } = require('express')
const api = require('../services/gymEquipment')
const mapErrors = require('../utils/mapper')
const {isAuth, isOwner}=require('../middlewares/guards')
const preload = require('../middlewares/preload')


router.get('/' ,async (req, res) => {
    const data=await api.getAll()
    console.log('Read catalog')
    res.json(data)
})

router.post('/',isAuth(), async (req, res) => {
    const item = {
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        title: req.body.title,
        owner:req.user._id
    }
    try {
        
        const result = await api.create(item)
        res.status(201).json(result)
    } catch (err) {
        console.error(err.message)
        const error=mapErrors(err)
        res.status(400).json({message:error})
    }
 
  
})

router.get('/:id',preload() , (req, res) => {
   const item= res.locals.item
    console.log('Read Record')
    console.log(item)
    res.json(item)
})

router.put('/:id',preload(),isOwner(),async (req, res) => {
    const id=req.params.id
    const item = {
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        title: req.body.title,
        
    }
    try {
        
        const result = await api.update(id,item)
        res.json(result)
        
    } catch (err) {
        console.error(err.message)
        const error=mapErrors(err)
        res.status(400).json({message:error})
    }
    console.log('update')
    
})

router.delete('/:id',preload(),isOwner() ,async (req, res) => {
    console.log('Delete catalog')
    const id=req.params.id
    try {
        
        const result = await api.getByIdAndDelete(id)
        res.json(result)
        
    } catch (err) {
        console.error(err.message)
        const error=mapErrors(err)
        res.status(400).json({message:error})
    }
})
module.exports = router