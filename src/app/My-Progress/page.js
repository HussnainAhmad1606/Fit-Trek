"use client"
import React, {useState, useEffect} from "react";
import Trr from "@/components/Trr";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useUserStore } from "@/store/store";
import Graph from "../../components/Graph";
import Link from "next/link";
const MyProgress = () => {
  const {UserId} = useUserStore();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
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
  const getGraphData = async() =>{
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const data = {
      year: year,
      month: month+1
    }
    const req = await fetch("http://localhost:3000/api/workouts/get-monthly-workouts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await req.json();
    console.log(result);
    if (result.type == "success"){
      setData(result.response)
    }
    setIsLoading(false)

  }


  useEffect(() => {
    getExercises();
    getGraphData();
  }, [])
  
  return (
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <div className="my-5 flex justify-center items-center flex-row">
          <h1 className="text-5xl font-bold">My Progress</h1>
          <Link href={"/"} className="btn btn-sm btn-primary mx-5">Analytics</Link>
          </div>
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


<div>

  <h1 className="text-center font-bold text-4xl my-10">Monthly Data</h1>
{
  isLoading==false?(
    <Graph data={data}/>
    ):null
}

    </div>
    
    </>
  );
};

export default MyProgress;
