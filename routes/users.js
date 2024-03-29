const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('User List')
})

router.get('/new', (req,res) => {
    res.send('New User Form')
})

router.post('/',(req,res) => {
    res.send("Post Users")
})

//This is one of the way but there is one other way
// router.get('/:id',(req,res) => {
//     res.send(`Get user with ID ${req.params.id}`)
// })

// router.put('/:id',(req,res) => {
//     res.send(`Update user with ID ${req.params.id}`)
// })

// router.delete('/:id',(req,res) => {
//     res.send(`Delete user with ID ${req.params.id}`)
// })

router.route('/:id').get((req,res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
}).put((req,res) => {
    res.send(`Update user with ID ${req.params.id}`)
}).delete((req,res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})

const users = [{name:"Akhil"}, {name:"Mani"}]
router.param("id",(req,res,next,id) => {
    req.user = users[id]
    next()
})
module.exports = router