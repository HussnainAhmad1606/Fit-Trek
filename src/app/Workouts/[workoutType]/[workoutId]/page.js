"use client";
import React, { useState, useEffect } from "react";
import WorkoutInfo from "@/components/WorkoutInfo";
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaCalendarAlt } from "react-icons/fa";
import ConfettiExplosion from 'react-confetti-explosion';
import {format} from "timeago.js"
import Timer from "@/components/Timer";
import { useUserStore } from "@/store/store";
import { toast } from "react-hot-toast";
const Worksout = ({ params }) => {

  const {setIsExplosion, isExplosion} = useUserStore();

  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const {UserId} = useUserStore();
  
  const { workoutType, workoutId } = params;
  const [exercise, setExercise] = useState({});
  const [suggestion, setSuggestion] = useState("");

  const submitWorkout = async() => {
    const data = {
      userId:UserId,
      exerciseId:workoutId,
      duration:exercise.duration,
      calories: exercise.kcal,
      notes: suggestion
    }
    console.log(data)
    const req = await fetch("/api/workouts/add-user-workout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const result = await req.json();
    if (result.type == "success") {
      
      toast.success("Workout added");
 
    } else {
      toast.error("Error while adding your workout. Please Try again");
    }
  }
 
  const workoutComplete = () => {
    console.log("Workout Completed");
    toast.success("Workout Completed");


    document.getElementById('workout_complete').showModal()



    
  }
  const getExercise = async () => {
    setIsLoading(true);
    const data = {
      workoutId: workoutId,
    };

   
    
    console.log(data);

    const req = await fetch("/api/exercises/get-single-exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const result = await req.json();
    if (result.type == "success") {
      setExercise(result.response[0]);
      
      console.log(result.response[0]);
      setDuration(result.response[0].duration)
     
      
      setIsLoading(false);
    } else {
      toast.error("Error while retreiving exercise. Please Try again");
    }
  };

  useEffect(() => {
    getExercise();
  }, []);
  return (
    <>
    {
      isExplosion?(
<ConfettiExplosion />
      ):null
    }
      <div
        className="hero  min-h-screen"
        style={{
          backgroundImage: "url(/workoutcover.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-left text-neutral-content">
          <div className=" text-center mx-10">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              {exercise?.name}
            </h1>
            <p className="mb-5 lg:text-2xl">{exercise?.description}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Instruction</h1>
              <p className="py-6">{exercise?.instructions}</p>
              {
                isLoading==false?(
                  <Timer workoutComplete={workoutComplete} duration={duration} />
                ):null
              }
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="p-10">
                <div className="flex  items-center">
                  <IoMdTime className="text-3xl mr-10" />
                  <h1>{exercise?.duration} Minutes</h1>
                </div>
                <div className="my-5 flex  items-center">
                  <FaFire className="text-3xl mr-10" />
                  <h1>{exercise?.kcal} kcal</h1>
                </div>
                <div className="my-5 flex  items-center">
                  <SiLevelsdotfyi className="text-3xl mr-10" />
                  <h1>{exercise?.difficulty}</h1>
                </div>
                <div className="my-5 flex  items-center">
                  <FaCalendarAlt className="text-3xl mr-10" />
                  <h1>{format(exercise?.created_at)}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


 
      <dialog id="workout_complete" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Workout Completed!</h3>
    <p className="py-4">Write suggestion for yourself:</p>
    <textarea value={suggestion} onChange={e=>setSuggestion(e.target.value)} className="textarea textarea-bordered" placeholder="Bio"></textarea>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={submitWorkout} className="btn">Save</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  );
};

export default Worksout;
