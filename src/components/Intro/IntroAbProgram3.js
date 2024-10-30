import React from "react";
import { Link } from "react-router-dom";

function IntroAbProgram3() {
  return (
    <div className="flex flex-col gap-6 justify-between min-h-screen ">
      <div
        className="p-4 max-w-prose mx-auto text-right rounded-lg text-gray-800 min-h-screen justify-between flex flex-col bg-white"
        dir="rtl"
      >
        <p></p>
        <div>
          <p className="mb-4 text-center leading-relaxed">
            سنستعمل عدة وسائل تعليمية في هذا التطبيق من فيديو وصورة وصوت مصممة
            خصيصاً للمساعدة في تعلم آلة الناي
          </p>
        </div>
        <p className="text-center">
          <Link
            to={"/introlinks/nay"}
            className="font-bold py-1 rounded-lg  px-3 text-center bg-slate-700 text-white focus:ring-2 hover:bg-slate-600 transition duration-200 ease-in-out"
          >
            ⬅
          </Link>
        </p>
      </div>
    </div>
  );
}

export default IntroAbProgram3;
