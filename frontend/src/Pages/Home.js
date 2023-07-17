import React from 'react'
import Workouts from './Workouts';
import WorkoutForm from '../Components/WorkoutForm';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-7 mb-3 mb-sm-0 mt-4">
                    <div className="">
                        <div className="card-body">
                            <Workouts />
                            {/* get data from MongoDB */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 m-4 ms-auto">
                    <div className="card">
                        <div className="card-body">
                            <WorkoutForm />
                            {/* post data to MongoDB */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home