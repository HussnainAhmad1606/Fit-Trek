import React from "react";
import Card from '../../components/card'
import WorkoutList from '../../components/WorkoutList'
const Worksout = ({params}) => {

    const {workoutType} = params;
  return (
    <>
    

      <div>
        <h1 className="text-center my-5 text-5xl font-bold">{workoutType} Workout</h1>

        <div className="flex justify-center items-center flex-col">
          <WorkoutList title={"Workout 1"} time={"5 Min"} kcal={300}/>
          <WorkoutList title={"Workout 2"} time={"15 Min"} kcal={70}/>
          <WorkoutList title={"Workout 3"} time={"25 Min"} kcal={500}/>
          <WorkoutList title={"Workout 4"} time={"225 Min"} kcal={1000}/>
        
        </div>
      </div>
    </>
  );
};

export default Worksout;
