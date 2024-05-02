import React from "react";
import Trr from "@/components/Trr";
import Trr from "../../components/Trr";
const MyProgress = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="w-auto">
          <h1 className="text-5xl font-bold mb-11">My Progress</h1>
          <div className="overflow-x-auto w-80 lg:w-full">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Workout</th>
                  <th>Time</th>
                  <th>Calories burn</th>
                  <th>Advance</th>
                </tr>
              </thead>
              <tbody>
                <Trr name="Chest" time="10 mins" cal="100"/>
                <Trr name="Legs" time="20 mins" cal="300"/>
                <Trr name="Back" time="15 mins" cal="200"/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProgress;
