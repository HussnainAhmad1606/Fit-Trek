"use client"
import React, {useState, useEffect} from "react";
import Trr from "@/components/Trr";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useUserStore } from "@/store/store";
const MyProgress = () => {
  const {UserId} = useUserStore();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [exercises, setExercises] = useState([]);

  const filterWorkouts = async() => {
    const data = {
      userId: UserId,
      startDate: startDate,
      endDate: endDate
    }
    const req = await fetch("http://localhost:3000/api/workouts/filter-workouts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await req.json();
    console.log(result);
    if (result.type == "success"){
      setExercises(result.response)
    }
  }

  const getExercises = async() =>{
    const data = {
      userId: UserId
    }
    const req = await fetch("http://localhost:3000/api/exercises/get-all-user-exercises",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await req.json();
    console.log(result);
    if (result.type == "success"){
      setExercises(result.response)
    }

  }


  useEffect(() => {
    getExercises();
  }, [])
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-auto">
          <h1 className="text-5xl font-bold mb-11">My Progress</h1>
          <div className="flex justify-center items-center">
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <p className="text-4xl mx-5">-</p>
          <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          <button onClick={filterWorkouts} className="ml-5 btn btn-sm btn-primary">Filter</button>
          </div>
          <div className="overflow-x-auto w-80 lg:w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Workout</th>
                  <th>Time</th>
                  <th>Calories burn</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  exercises.map((exercise, index)=> {
                    return (
                      <Trr date={exercise.date_completed} name={exercise.exercise_name} time={exercise.duration_minutes} cal={exercise.calories_burned}/>

                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
