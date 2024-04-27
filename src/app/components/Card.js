import React from "react";

const Card = (params) => {


  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={`/${params.pic}`} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{params.title}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Start Workout</button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Card;
