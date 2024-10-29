import React from "react";

function AboutTheProgram() {
  return (
    <div className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4 underline">فكرة البرنامج :</h1>
      <p className="text-lg leading-relaxed text-gray-700" dir="rtl">
        - أ/ مادونا مرزوق اسكاروس، باحثة بمرحلة الماجستير بقسم التربية الموسيقية
        بكلية التربية النوعية بجامعة أسيوط، تخصص موسيقى عربية (ناي).
      </p>
      <p className="text-lg leading-relaxed text-gray-700" dir="rtl">
        تحت إشراف: <br />- أ. د. أطياف محمد يوسف، أستاذ الموسيقى العربية (آلة
        الناي) ووكيل الكلية لشئون البيئة والمجتمع سابقاً.
      </p>
      <p className="text-lg leading-relaxed text-gray-700" dir="rtl">
        - أ. د. أمل محمد توفيق، أستاذ الموسيقى العربية (آلة العود).
      </p>
    </div>
  );
}

export default AboutTheProgram;
