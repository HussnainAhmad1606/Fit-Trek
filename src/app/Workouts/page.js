import React from "react";
import Card from '@/components/card'
const Worksout = () => {
  return (
    <>
      <div
        className="hero  min-h-screen"
        style={{
          backgroundImage: "url(/workoutcover.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-left text-neutral-content">
          <div className=" text-center mx-10">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Workouts</h1>
            <p className="mb-5 lg:text-2xl">
              Elevate your workouts with our dynamic routines tailored for gym
              buddies. Unleash your strength, motivate each other, and achieve
              greatness together!
            </p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center my-5 text-5xl font-bold">Workouts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10 mx-auto justify-center  mt-10">
          <Card title="chest" pic="chest.jpg"/>
          <Card title="leg" pic="LEG-WORKOUTS.webp"/>
          <Card title="biceps " pic="bicep.webp"/>
          <Card title="triceps" pic="tricep.jfif"/>
          <Card title="back" pic="back.jpg"/>
          <Card title="arms" pic="arm.png"/>
          <Card title="shoulder" pic="shoulderr.jpg"/>
        </div>
      </div>
    </>
  );
};

export default Worksout;
