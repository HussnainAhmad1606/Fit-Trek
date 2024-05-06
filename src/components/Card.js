"use client"
import Link from "next/link";
import React, {useEffect} from "react";

const Card = (params) => {

useEffect(() => {

  
  
}, [])



  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={`/${params.pic}`} alt="pic" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{params.title}</h2>
          <div className="card-actions justify-end">
            <Link href={`/Workouts/${params.title}`} className="btn btn-primary">Show Workouts</Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
