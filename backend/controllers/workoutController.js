const Workout = require('../models/workoutModel')

// Get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).son(workouts)
}

// Get single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  const workout = await Workout.findById(id)

    if (!workout) {
      return res.status(404).json({error: 'No such workout!'})
    }

      res.status(200).json(workout)
}

// Create new workout
const createWorkout = async (req, res) => {
  const {title, reps, weight} = req.body

  try {
    const workout = await Workout.create({title, reps, weight}) 
      res.status(200).json(workout)
  } catch(error) {
      res.status(400).json({error: error.message})
  }
}

// Delete a workout 

module.exports = {
  createWorkout
}