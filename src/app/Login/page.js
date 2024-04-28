"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with values:", { email, password });
  };

  return (
    <>
      <div
        className="hero min-h-screen bg-base-200"
       
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-auto lg:w-1/2">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Welcome back to Fit Trek! Ready to dive back into your fitness
                journey? Log in now to access your personalized workout
                routines, revisit your progress, and connect with your gym
                buddies. With Fit Trek, staying motivated and reaching your
                goals is just a login away. Let's continue this journey
                together!
              </p>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
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
                <label className="label">
                  Don't have an account?{" "}
                  <a href="/Signup" className="link link-hover">
                    Create One!
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onSubmit={handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
