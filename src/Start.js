import React from "react";
import { Link } from "react-router-dom";
function Start({ setshowContent }) {
  return (
    <div className="flex justify-between min-h-screen flex-col p-6 pt-0">
      <div className="flex justify-center items-center flex-col text-4xl gap-10">
        <p className="text-center">
          برنامج الكتروني لتعليم آلة الناي للمتخصصين والغير متخصصين
        </p>
        <p className="text-center">
          An electronic program to learn The Nay for professionals and
          non-specialists
        </p>
      </div>
      {/* <div className="w-full h-full max-w-xl flex justify-center items-center ">
        <img src={startImg} />
      </div> */}
      <div className="text-end">
        <Link
          to={"/Links"}
          className="shadow-lg bg-slate-500 hover:bg-slate-600  focus:ring-4  px-16 py-2  rounded-lg text-white transition duration-200 ease-in-out"
          onClick={() => setshowContent(false)}
        >
          أبدأ
        </Link>
      </div>
    </div>
  );
}

export default Start;
