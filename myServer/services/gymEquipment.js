const Item=require('../models/Item')

async function getAll(){
    return Item.find({})
}

function getById(id){

    return Item.findById(id)
}


async function create(item){
    const result=new Item(item)

    await result.save()

    return result
}

async function update(id,item){
    const existing= await Item.findById(id)
 
    existing.title=item.title
    existing.description=item.description
    existing.image=item.image
    existing.price=item.price
    
    await existing.save()
    return existing
   
}

async function getByIdAndDelete(id){
    const existing= await Item.findByIdAndRemove(id)

}

module.exports={
    create,
    getAll,
    getById,
    update ,
    getByIdAndDelete
}