import React from "react";
import { Link } from "react-router-dom";

function IntroAbProgram1() {
  return (
    <div className="flex flex-col gap-6 justify-between min-h-screen ">
      <div
        className="p-4 max-w-prose mx-auto text-right rounded-lg text-gray-800 min-h-screen justify-between flex flex-col bg-white"
        dir="rtl"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4 underline">المقدمة :</h2>
          <p className="mb-4 text-center leading-relaxed">
            آلة الناي من أقدم الآلات الموسيقية ، وبداية ظهورها يرجع إلى ما قبل
            الحضارات الإغريقية والرومانية ، وأول اكتشاف للإنسان البدائي آلات
            الطرق ثم آلات النفخ ومنها ما هو مصنوع من نبات الغاب ومنها ما هو من
            قرون الحيوانات وانتشرت هذه الآلات عبر العصور عن طريق الحروب
            والتبادلات التجارية ، واستمرت آلة الناي تتعاقب عبر العصور بأشكال
            مختلفة منها ما هو ذو ثقبين أو ثلاث أو أربع ثقوب حتى وصلت إلى ما هو
            عليه الآن ستة ثقوب أمامية وثقب واحد من الخلف.{" "}
          </p>
        </div>
        <p className="text-center">
          <Link
            to={"/introlinks/introofpro2"}
            className="font-bold py-1 rounded-lg  px-3 text-center bg-slate-700 text-white focus:ring-2 hover:bg-slate-600 transition duration-200 ease-in-out"
          >
            ⬅
          </Link>
        </p>
      </div>
    </div>
  );
}

export default IntroAbProgram1;
