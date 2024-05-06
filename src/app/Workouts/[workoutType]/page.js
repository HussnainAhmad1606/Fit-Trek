"use client"
import React, { useEffect, useState } from "react";
import Card from '@/components/card'
import WorkoutList from '@/components/WorkoutList'
const Worksout = ({params}) => {

    const {workoutType} = params;
    const [exercises, setExercises] = useState([])

    const getExercises = async() => {
      const data = {
        type: workoutType.toLowerCase()
      }

      console.log(data)
     
      const req = await fetch("/api/exercises/get-exercises",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
  
      const result = await req.json();
      if (result.type == "success"){
        setExercises(result.response)
      }
      else {
        toast.error("Error while retreiving exercise. Please Try again")
      }
    }

    useEffect(() => {
      getExercises();
    }, [])
    
  return (
    <>
    

      <div>
        <h1 className="text-center my-5 text-5xl font-bold">{workoutType} Exercise</h1>

        <div className="flex justify-center items-center flex-col">
          {
            exercises.map((exercise,index)=> {
              return (
                <WorkoutList workoutType={exercise.category} workoutId={exercise.id} difficulty={exercise.difficulty} createdAt={exercise.created_at} equipment={exercise.equipment} key={index} title={exercise.name} time={exercise.duration} kcal={exercise.kcal}/>

              )
            })
          }
       
        </div>
      </div>
    </>
  );
};

export default Worksout;
