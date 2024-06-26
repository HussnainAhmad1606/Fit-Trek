"use client"
import React from "react";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import {useUserStore} from "@/store/store";
const Navbar = () => {

  const {isLogin, Username, setIsLogin} = useUserStore();

  

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("lms-token");
    toast.success("Log Out Success");

  }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="drawer w-10 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn mr-3 drawer-button">
              <FaBars />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Workouts">Workouts</Link>
              </li>

              <li>
                <Link href="/My-Progress">My Progress</Link>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">Fit Trek</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden lg:flex md:flex">
          <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Workouts">Workouts</Link>
              </li>

              <li>
                <Link href="/My-Progress">My Progress</Link>
              </li>
              
          </ul>

          {
            isLogin==false?(
              <>
              <Link className="btn btn-primary mx-2" href="/Login">Login</Link>
              <Link className="btn btn-primary" href="/Signup">Signup</Link>
              </>

            ):(
              <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={`https://ui-avatars.com/api/?name=${Username}&background=random`} 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/dashboard"} className="justify-between">
                  Welcome, {Username}
                </Link>
              </li>
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
              <Link href={"/dashboard"}>Logout</Link>
              </li>

            </ul>
          </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
