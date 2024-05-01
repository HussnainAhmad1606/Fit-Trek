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

      <div className="hero h-screen  bg-base-200">
        <div className="hero-content  text-center">
          <div className="w-80 lg:w-auto">
            <h1 className="text-1xl lg:text-3xl mb-10">
              Get Most Competitive Luxury Hotel Gym Membership Right Now to Save
              Big Bucks!
            </h1>
            <h1 className="font-bold text-3xl lg:text-5xl mb-10">
              Hotel Gym Membership Plan
            </h1>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Memberhip</th>
                    <th>1 Month</th>
                    <th>3 Month</th>
                    <th>6 Month</th>
                    <th>1 Year</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td className="font-bold">Single</td>
                    <td>Rs. 2000</td>
                    <td>Rs. 5000</td>
                    <td>Rs. 9000</td>
                    <td>Rs. 17000</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="font-bold">Couple</td>
                    <td>Rs. 3500</td>
                    <td>Rs. 10000</td>
                    <td>Rs. 18000</td>
                    <td>Rs. 30000</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>
                      <span className="font-bold">Family</span>
                      <br></br>2 Adults and 2 Kids under 12
                    </td>
                    <td>Rs. 5000</td>
                    <td>Rs. 12000</td>
                    <td>Rs. 25000</td>
                    <td>Rs. 4000</td>
                  </tr>
                </tbody>
              </table>

              <p className=" mt-10">
                <span className=" font-bold">Gym Timings:</span>
                7:00 am to 10:00 pm Winter and 6:30 am to 11:00 pm Summer
                <br></br> All above rates are inclusive of taxes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-200">

        <h1 className="font-bold  text-5xl  text-center">Gallery</h1>
      <div className="carousel carousel-end mt-10 lg:gap-10 rounded-box w-96 lg:w-auto">
        <div className="carousel-item h-96 w-96">
          <img src="/1.jpeg" alt="Drink" />
        </div>
        <div className="carousel-item h-96 w-96">
          <img src="2.jpeg" alt="Drink" />
        </div>
        <div className="carousel-item h-96 w-96">
          <img src="3.jpeg" alt="Drink" />
        </div>
        <div className="carousel-item h-96 w-96">
          <img src="4.jpeg" alt="Drink" />
        </div>
      </div>
      </div>
    </>
  );
}
