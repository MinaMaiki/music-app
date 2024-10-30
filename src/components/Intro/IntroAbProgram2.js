import React from "react";
import { Link } from "react-router-dom";
import imgwoman from "../../assists/imgs/flying Nay.png";

function IntroAbProgram2() {
  return (
    <div className="flex flex-col gap-6 justify-between min-h-screen ">
      <div
        className="p-4 max-w-prose mx-auto text-right rounded-lg text-gray-800 min-h-screen justify-between flex flex-col bg-white"
        dir="rtl"
      >
        <div>
          <p className="mb-4 text-center leading-relaxed">
            هذا التطبيق لتعلم آلة الناي ، أن هذه الطريقة التعليمية عبارة عن
            مجموعة من الدروس مصممة خصيصاً لتعلم آلة الناي بطريقة صحيحة وأكاديمية
          </p>
          <div className="flex justify-center items-center">
            <img className="max-w-sm mx-2" src={imgwoman} />
          </div>
        </div>
        <p className="text-center">
          <Link
            to={"/introlinks/introofpro3"}
            className="font-bold py-1 rounded-lg  px-3 text-center bg-slate-700 text-white focus:ring-2 hover:bg-slate-600 transition duration-200 ease-in-out"
          >
            ⬅
          </Link>
        </p>
      </div>
    </div>
  );
}

export default IntroAbProgram2;
