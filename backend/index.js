const express = require('express')
const database = require('./db')
const rout =require('./router/rout')
const cors =require('cors')



database()
const app = express();
app.use(express.json())
app.use(cors(
))

app.use('/book',rout)

// app.listen(3000, () => {
//     console.log('server connected');
// })

module.exports=app;