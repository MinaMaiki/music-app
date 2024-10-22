import React from "react";
import { Link } from "react-router-dom";
import imgsrcmusicworld from "../assists/Cropped imgs/Screenshot 2024-10-22 225412.png";
import imgsrcwoman from "../assists/Cropped imgs/Screenshot 2024-10-22 225103.png";
function AfterIntro() {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <div className="mt-32 flex items-center justify-center ">
        <img
          src={imgsrcmusicworld}
          alt="img"
          className="w-full h-full max-w-2xl "
        />
      </div>
      <div>
        <div className="flex justify-between p-12 ">
          <div className="flex flex-col p-4 gap-6 text-3xl mr-5">
            <Link
              to={"/main"}
              className="w-3/4 font-bold p-5 text-center bg-white ml-12 hover:bg-slate-300 transition duration-200 ease-in-out"
            >
              أبدأ التعلم
            </Link>
            <Link className=" w-3/4 font-bold p-5 text-center bg-yellow-200 hover:bg-slate-300 transition duration-200 ease-in-out">
              أستمع
            </Link>
            <Link className=" w-3/4 first-letter:font-bold p-5 text-center ml-12 bg-violet-400 hover:bg-slate-300 transition duration-200 ease-in-out">
              تدرب
            </Link>
          </div>
          <div>
            <img src={imgsrcwoman} className="w-full h-full max-w-lg " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterIntro;
