import React from 'react';
import {useWorkoutContext} from "../Hooks/useWorkoutContext"

const WorkoutDetails = (workout) => {
    const {dispatch} = useWorkoutContext();

    const handleClick =  async () => {
        const response = await fetch(`/api/workouts/${workout._id}`, {
            method : 'DELETE'
        })

        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload : json})
        }
    }

    return (
        <div className="col-lg-4 mb-3 mb-sm-0 p-0">
            <div className="card mt-1 ms-3">
                <div className="card-body">
                    <h3 className="card-title primaryColour">{workout.title}</h3>
                    <p className="card-text">Load: {workout.load} kgs</p>
                    <p className="card-text">Reps: {workout.reps}</p>
                    <button onClick={handleClick}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetails;
