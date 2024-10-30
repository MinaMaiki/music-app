import React from "react";
import { Link } from "react-router-dom";
import fluteImg from "../../assists/imgs/Nay.jpg";
function Nay() {
  return (
    <div
      className="p-4 max-w-prose mx-auto text-right text-gray-800 bg-white"
      dir="rtl"
    >
      <p className=" leading-relaxed " dir="rtl">
        <h2 className="text-2xl font-semibold mb-4 underline">
          معلومات عن اله الناي :{" "}
        </h2>
        آلة الناي عباره عن قصبة جوفاء مأخوذه من نبات الغاب مفتوحة الطرفين تتكون
        من تسعة عقل وتحتوي علي ستة ثقوب امامية وثقب واحد في الخلف وكل ثقب يبعد
        عن الاخر بعداً معياناً والبعد بين الثقب والثقب والذي يليه متفاوت وذلك
        حسب ابعاد المسافات الصوتية وتوضع اصابع اليدين علي هذه الثقوب باحكام
        لغلقها وعند النفخ يرفع العازف الاصبع الذي يريده ليصدر من الآلة الصوت
        المطلوب ويتم غلق الثقوب الامامية باصابع البنصر والوسطي والسبابة لليد
        اليمني ويتم غلق الثقوب الثلاثة السفلي باصبح البنصر والوسطي والسبابة لليد
        اليسري ويغلق الثقب الخلفي باصبع الابهام لليد اليسري.
      </p>{" "}
      <div className="flex justify-center items-center">
        <img src={fluteImg} className="max-h-64 max-w-sm " />
      </div>{" "}
      <p className="text-center">
        <Link
          to={"/introlinks/introofpro1"}
          className="font-bold py-1 rounded-lg  px-3 text-center bg-slate-700 text-white focus:ring-2 hover:bg-slate-600 transition duration-200 ease-in-out"
        >
          ➡
        </Link>
      </p>
    </div>
  );
}

export default Nay;
