const mongoose=require('mongoose')

const connection= async()=>{
    await mongoose.connect('mongodb+srv://amantyagi3132:aman132217tyagi@cluster0.wdyih9t.mongodb.net/bookstore').then(()=>{

        console.log('database connected');
        
    }).catch((err)=>{
      console.log(err);
      
    })
}
module.exports=connection