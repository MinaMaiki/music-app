import React from "react";
import { Link, Outlet } from "react-router-dom";

function IntroLinks() {
  return (
    <div
      className="flex flex-col gap-6  justify-between min-h-screen p-6 text-2xl font-bold"
      dir="rtl"
    >
      <div className="flex justify-between  gap-10">
        <Link
          to="/introlinks/about"
          className="shadow-lg flex justify-center items-center  p-4 bg-slate-500 hover:bg-slate-600 focus:ring-4 rounded-lg text-white transition duration-200 ease-in-out"
        >
          <p className="text-center">فكرة البرنامج</p>{" "}
        </Link>
        <Link
          className="shadow-lg  flex justify-center items-center  p-4 bg-slate-500 hover:bg-slate-600 focus:ring-4 rounded-lg text-white transition duration-200 ease-in-out"
          to="/introlinks/introofpro1"
        >
          <p className="text-center">المقدمة</p>
        </Link>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
      <div className=" p-4 text-2xl   font-bold">
        <Link
          className="shadow-lg bg-slate-500 hover:bg-slate-600  focus:ring-4  px-10 py-2  rounded-lg text-white transition duration-200 ease-in-out"
          to={"/Links"}
        >
          القائمة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default IntroLinks;
