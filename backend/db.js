const mongoose=require('mongoose')

const connection= async()=>{
    await mongoose.connect('mongodb://localhost:27017/bookstore').then(()=>{

        console.log('database connected');
        
    }).catch((err)=>{
      console.log(err);
      
    })
}
module.exports=connection