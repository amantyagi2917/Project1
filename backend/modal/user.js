const mongoose=require('mongoose');

const userSchima=mongoose.Schema({
    bookname:{
        type:String,
        require:true
    },
    booktitle:{
        type:String,
        require:true
    },
    authername:{
        type:String,
        require:true
    },
    publish:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },

})
module.exports=mongoose.model('tyagisstore',userSchima)