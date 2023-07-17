require('dotenv').config()
const express = require("express");
const workoutRoute = require("./Routes/Workouts")
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
app.use(express.json())
// LISXxddWVLeep9uD
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use('/api/workouts', workoutRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 4000 and connected to mongoDB");
        })
    })
    .catch((error) => {
        console.log(error)
    })
