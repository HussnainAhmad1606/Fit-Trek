import React from "react";
import { FaBars } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const Navbar = () => {
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Workouts">Workouts</a>
              </li>

              <li>
                <a href="/My-Progress">My Progress</a>
              </li>
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/Signup">Signup</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Fit Trek</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden lg:flex md:flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Workouts">Workouts</a>
            </li>
            <li>
              <a href="/My-Progress">My Progress</a>
            </li>
            <li>
              <a href="/Signup">Signup</a>
            </li>
          </ul>

          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
