import React from "react";
import DashboardCard from "@/components/DashboardCard"
const MyProgress = () => {
  return <div>
    <h1 className="my-10 text-3xl font-bold text-center">Dashboard</h1>
   <div className="flex justify-center items-center">
   <DashboardCard title={"Today's Session"} number={"20 Mints"}/>
    <DashboardCard title={"This Month"}  number={"20 Hours"}/>
    <DashboardCard title={"Total Workouts"} number={200}/>
   </div>
  </div>;
};

export default MyProgress;
