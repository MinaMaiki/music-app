import React from "react";
import { Link } from "react-router-dom";
import imgsrcmusicworld from "../assists/imgs/عالم الموسيقي.png";
import bgintro from "../assists/imgs/bg intro.png";

function Links() {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <div className=" flex items-center mt-4 justify-center px-4 sm:px-0">
        <img
          src={imgsrcmusicworld}
          alt="img"
          className="w-full h-auto max-w-2xl"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between p-4 gap-6 md:p-16 ">
        <div className="flex flex-col gap-6 text-xl md:text-3xl">
          <Link
            to="/introlinks"
            className="font-bold p-5 text-center rounded-md bg-white md:ml-12 hover:bg-slate-300 transition duration-200 ease-in-out"
          >
            المقدمة
          </Link>
          <Link
            to="/lesons/0"
            className="rounded-md font-bold p-5 text-center bg-yellow-200 hover:bg-slate-300 transition duration-200 ease-in-out"
          >
            أبدا التعلم
          </Link>
          <Link
            to="/summary"
            className="rounded-md font-bold p-5 text-center bg-violet-400 md:ml-12 hover:bg-slate-300 transition duration-200 ease-in-out"
          >
            قائمة الدروس
          </Link>
        </div>

        <img
          src={bgintro}
          alt="Side"
          className="w-full h-auto max-w-4xl sm:max-w-lg"
        />
      </div>
    </div>
  );
}

export default Links;
