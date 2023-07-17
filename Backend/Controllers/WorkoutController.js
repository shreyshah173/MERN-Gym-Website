const Workout = require('../Models/WorkoutModel')
const express = require('express')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {
    const Workouts = await Workout.find({})
    res.status(200).json(Workouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
        // console.log("Step1")
    }
    const workout = await Workout.findById(id)
    // console.log("Step2")
    if (!workout) {
        return res.status(404).json({ error: 'no such workout' })
        // console.log("Step3")
    }
    res.status(200).json(workout)
}

// app.post new workout 
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body
    let emptyFields = [];
    if(!title){
        emptyFields.push('title');
    }
    if(!reps){
        emptyFields.push('reps');
    }

    if(emptyFields.length > 0){
        return res.status(404).json({error: 'Please field the required fields' , emptyFields})
    }

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: 'no such workout' })
    }
    res.status(200).json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await Workout.findOneAndUpdate({ _id: id } , {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: 'no such workout' })
    }
    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}