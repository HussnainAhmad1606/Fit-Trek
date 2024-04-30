import React from 'react'
import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";

function WorkoutList({title, time, kcal}) {
  return (
    <div className="my-5 card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title text-3xl">{title}</h2>
      <div className='my-10 flex justify-between items-center'>
        <div className='flex justify-center items-center'>
     <IoMdTime className='text-2xl'/>
      <p> {time}</p>

        </div>


        <div className='flex justify-center items-center'>

      <FaFire className='text-2xl'/> 
      <p>{kcal}</p>
        </div>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Start Now</button>
      </div>
    </div>
  </div>
  )
}

export default WorkoutList