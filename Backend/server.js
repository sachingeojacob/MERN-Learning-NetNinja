require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/',(req, res) => {
//     res.json({mssg: 'Welcome to the app'})
// })
app.use('/api/workouts', workoutRoutes)

//listen for request in port number
app.listen(process.env.PORT, ()=>{
    console.log('Listening to port',process.env.PORT)
})