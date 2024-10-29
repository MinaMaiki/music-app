import React from "react";
import { Link } from "react-router-dom";

function IntroAbProgram() {
  return (
    <div className="flex flex-col gap-6 justify-between min-h-screen ">
      <div
        className="p-4 max-w-prose mx-auto text-right text-gray-800 bg-white"
        dir="rtl"
      >
        <h2 className="text-2xl font-semibold mb-4 underline">المقدمة :</h2>
        <p className="mb-4 leading-relaxed">
          آلة الناي من أقدم الآلات الموسيقية ، وبداية ظهورها يرجع إلى ما قبل
          الحضارات الإغريقية والرومانية ، وأول اكتشاف للإنسان البدائي آلات الطرق
          ثم آلات النفخ ومنها ما هو مصنوع من نبات الغاب ومنها ما هو من قرون
          الحيوانات وانتشرت هذه الآلات عبر العصور عن طريق الحروب والتبادلات
          التجارية ، واستمرت آلة الناي تتعاقب عبر العصور بأشكال مختلفة منها ما
          هو ذو ثقبين أو ثلاث أو أربع ثقوب حتى وصلت إلى ما هو عليه الآن ستة ثقوب
          أمامية وثقب واحد من الخلف. هذا التطبيق لتعلم آلة الناي ، ان هذه
          الطريقة التعليمية هي عبارة عن مجموعه من الدروس مصممة خصيصاً لتعلم آلة
          الناي بطريقة صحيحة واكاديمية مع الكثير من الامثلة والتمارين سنستعمل
          عدة وسائل تعليمية في هذا التطبيق من فيديو وصورة وصوت وبرامج مصممة
          خصيصاً للمساعدة في تعلم آلة الناي.
        </p>
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

export default IntroAbProgram;
