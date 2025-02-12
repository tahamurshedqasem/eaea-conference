"use client";
import React from "react";
import { motion } from "framer-motion";

const StudentOpinion = () => {
  return (
    <section
      id="student-opinion"
          className="bg-gray-100 py-16 px-6 min-h-screen flex items-center justify-center"
          dir="rtl"
    >
      <motion.div
        className="container mx-auto max-w-3xl bg-white shadow-xl rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
          رأي الطالبة حول مؤتمر EAEA 2025
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          بصفتي طالبًا، حتى بدون حضور المؤتمر السنوي لرابطة التعليم الأوروبية،
          أستطيع أن أرى أهميته في تشكيل مستقبل التعليم. يتردد صدى التركيز على
          التعلم مدى الحياة والتعليم الشامل معي لأن التعليم لا ينبغي أن يقتصر
          على سن أو مرحلة معينة في الحياة. إن فكرة sivistys (النمو الشخصي
          والمجتمعي مدى الحياة) ملهمة بشكل خاص - فهي تشير إلى أن التعلم لا يتعلق
          فقط بالنجاح الشخصي بل يتعلق أيضًا بالمساهمة في المجتمع.{" "}
          <span className="font-bold">EAEA 2025</span>، كانت
        </p>

        <motion.div
          className="mt-8 bg-blue-50 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl font-semibold text-blue-700">
            "كما يبرز موضوع عام 2025 القادم، مسارات التعلم المرنة. بصفتي طالبًا،
            أفهم أهمية التعلم القابل للتكيف - فالتعليم التقليدي لا يناسب الجميع،
            ووجود طرق متعددة للوصول إلى المعرفة يجعل التعليم أكثر فعالية
            وشمولاً. وهذا مهم بشكل خاص لأولئك الذين يواجهون حواجز أمام التعليم،
            سواء كانت مالية أو اجتماعية أو شخصية."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StudentOpinion;
