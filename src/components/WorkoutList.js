import React from 'react'
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { format } from 'timeago.js';
import Link from 'next/link';
function WorkoutList({title, time, kcal, equipment, createdAt,difficulty, workoutId, workoutType}) {
  return (
    <div className="my-5 card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-3xl">{title}</h2>
      <div className='my-5 flex justify-between items-center'>
      <div className="badge badge-primary">{equipment}</div>
      <div className="badge badge-secondary">{difficulty}</div>

      </div>
      <div className='my-10 flex justify-between items-center'>
        <div className='flex justify-center items-center'>
     <IoMdTime className='text-2xl'/>
      <p> {time} Minutes</p>

        </div>


        <div className='flex justify-center items-center'>

      <FaFire className='text-2xl'/> 
      <p>{kcal}</p>
        </div>
      </div>
      <div className="flex justify-center items-center card-actions justify-end">
      <p>Added {format(createdAt)}</p>
        <Link href={`/Workouts/${workoutType}/${workoutId}`} className="btn btn-primary">Start Now</Link>
      </div>

    </div>
  </div>
  )
}

export default WorkoutList