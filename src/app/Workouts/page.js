import React from "react";

const Worksout = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/workoutcover.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-left text-neutral-content">
        <div className="w-52">
          <h1 className="mb-5 text-5xl font-bold">Workouts</h1>
          <p className="mb-5">
          Elevate your workouts with our dynamic routines tailored for gym buddies. Unleash your strength, motivate each other, and achieve greatness together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Worksout;
