"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(event) => {
    console.log("Submitting")
    const data = {
      username: username,
      email: email,
      password: password,
      avatar: ""
    }
   
    const req = await fetch("/api/auth/signup",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const result = await req.json();
    const res = JSON.parse(result.data)
    console.log(result, res)
    if (res.message){
      toast.error(res.message)
    }
    else {
      toast.success("account creation Success")
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-auto lg:w-1/2">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <p className="py-6">
                Sign up for Fit Trek today and revolutionize your fitness
                journey! Track your routines, explore new gym workouts, and
                connect with fellow enthusiasts. With our intuitive platform,
                achieving your fitness goals has never been easier. Join us now
                and take the first step towards a healthier, happier you!
              </p>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="user"
                  className="input input-bordered"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <p className="text-sm mt-4">
                  Already have an account?{" "}
                  <a href="/Login" className="link link-hover">
                    Login here!
                  </a>
                </p>
                <p className="text-sm">
                  <a href="#" className="link link-hover">
                    Forgot Password?
                  </a>
                </p>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
