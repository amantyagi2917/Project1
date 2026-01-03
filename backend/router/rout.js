const express=require('express')
const userdata = require('../modal/user')


const router=express.Router()

router.get('/alldata',  async(req, res) => {
   try {
          const alldata= await userdata.find()
          res.status(200).json({message:'all users find' ,details:alldata   , success: true})

   } catch (error) {

     res.status(500).json({ message: 'user not find', error: error })
   }
})


router.post('/create', async (req, res) => {


    try {
         const { bookname, booktitle, authername, publish, price } = req.body;

         if ( !bookname|| !booktitle|| !authername|| !publish|| !price ) {
               
              res.status(500).json({ message: ' all input field are require' });

         } else {
             const create = await userdata.create({

            bookname,
            booktitle,
            authername,
            publish,
            price
        })
    
        res.status(200).json({ details: create, message: 'user created' ,success: true})


         }
       

    } catch (error) {
        res.status(500).json({ message: 'user not created', error: error })
    }
        
})

router.put('/update/:id', async(req,res)=>{

   
   try {
     const{id}=req.params;
    const { bookname, booktitle, authername, publish, price } = req.body;

    const find = await userdata.findByIdAndUpdate(id,{

            bookname,
            booktitle,
            authername,
            publish,
            price

    },
    {new:true});

     res.status(200).json({ details: find, message: 'user updated',success: true })
   
   } catch (error) {
       res.status(500).json({ message: 'user not updated', error: error })
   }  

})

router.delete('/delet/:id', async(req,res)=>{
     
    try {
        const{id}=req.params
        const delet = await userdata.findByIdAndDelete(id);

      
     res.status(200).json({ message: 'user deleted',details:delet ,success: true})


    } catch (error) {
         res.status(500).json({ message: 'user not deleted', error: error })
    }
})


module.exports=router