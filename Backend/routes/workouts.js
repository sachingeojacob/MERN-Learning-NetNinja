const express = require('express')

const router = express.Router()

//Get all workouts
router.get('/', (req, res) =>{
    res.json({mssg:'get all workouts'})
})

//Get single workouts
router.get('/:id', (req, res) => {
    res.json({mssg:'Get a single workout'})
})

//Post a workout
router.post('/', (req,res) => {
    res.json({mssg:'Post a new workout'})
})

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg:'deleteing a workout'})
})

//Update a Workout
router.patch('/:id', (req,res) => {
    res.json({mssg:'Updating a workout'})
})

module.exports = router