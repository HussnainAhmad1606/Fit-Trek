import Image from "next/image";
import Link from "next/link";
import { SiSimpleanalytics } from "react-icons/si";
import { BsClipboard2Data } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-auto lg:w-1/2">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              Welcome to Fit Trek{" "}
            </h1>
            <p className="mb-5">
              Fit Trek is a comprehensive fitness hub where you can explore
              various workout possibilities, from personalized routines to the
              latest gym trends. It offers tools to track your progress,
              discover new exercises, and connect with a supportive community.
              Whether you're a beginner or an experienced fitness enthusiast,
              Fit Trek is here to help you reach your health and wellness goals.
            </p>
            <Link href={"/Workouts"}>
              <button className="btn btn-primary">Explore Workouts</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 h-auto  w-full flex justify-center">
        <div className="hero-content ">
          <div className="w-full">
            <h1 className="text-3xl lg:text-5xl text-center font-medium ">
              What can the GymTrack World app help you with?
            </h1>
            <div className="grid grid-flow-row place-content-center lg:flex lg:mt-10 lg:justify-center gap-10 items-center text-centr">
              <div className="w-40">
                <p className="py-6  text-center  items-center flex justify-center text-8xl">
                  <SiSimpleanalytics />
                </p>
                <p className=" text-center">Training analytics</p>
              </div>
              <div className="w-40">
                <p className="py-6  text-center  items-center flex justify-center text-8xl">
                  <FaRegCalendarAlt />
                </p>
                <p className=" text-center">Easy and fast time management</p>
              </div>
              <div className="w-40">
                <p className="py-6  text-center  items-center flex justify-center text-8xl">
                  <BsClipboard2Data />
                </p>
                <p className=" text-center">Digital administration</p>
              </div>
              <div className="w-40">
                <p className="py-6  text-center  items-center flex justify-center text-8xl">
                  <CgGym />
                </p>
                <p className=" text-center">WorkOuts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
