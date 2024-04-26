import Image from "next/image";
import Link from "next/link";

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
              Welcome to Fit Trek, your go-to hub for all things fitness!
              Explore a world of workout possibilities, from tailored routines
              to the latest gym trends. With our comprehensive platform, you can
              track your progress, discover new exercises, and connect with a
              supportive community of fellow fitness enthusiasts. Whether you're
              a beginner or a seasoned pro, Fit Trek is here to empower you on
              your journey to a healthier, happier you. Start exploring now and
              unlock your full potential with Fit Trek!
            </p>
            <Link href={"/Workouts"}>
              <button className="btn btn-primary">Explore Workouts</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 min-h-screen ">
        <div className="hero-content ">
          <div className="w-full">
            <h1 className="text-3xl lg:text-5xl text-center font-medium ">What can the GymTrack World app help you with?</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
