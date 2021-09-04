const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/',(req,res) => {
    console.log("Here")
    //res.download('server.js')
    //res.status(200).json({message:"Error"})
    res.render('index',{text:'India'})
    
})

const userRouter = require('./routes/users')

app.use('/users',userRouter)

app.listen(5000)