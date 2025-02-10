"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="bg-gray-100 py-16 px-6 mt-20 text-right"
      dir="rtl"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4 font-cairo"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
            words={["مرحبًا بكم في المؤتمر السنوي لـ EAEA 2025"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-cairo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          انعقد المؤتمر السنوي لرابطة تعليم الكبار في معهد هلسنكي للموسيقى في 12
          يونيو 2024. وقد تم تنظيم المؤتمر بالتعاون مع المجلس الدولي لتعليم
          الكبار (ICAE) واستضافته مؤسسة التعلم مدى الحياة الفنلندية (Kvs). وفي
          المجمل، اجتذب الحدث 150 مشاركًا من 34 دولة حول العالم. ركز المؤتمر على
          الطرق التي يمكن أن يؤدي بها تعليم الكبار إلى إحداث تغييرات كبيرة في
          الأفراد والمجتمعات والمجتمع ككل.
          <span className="font-semibold text-blue-500">
            "على كيفية تعزيز استراتيجيات التعليم القابلة للتكيف لتحقيق الشمولية
            وتوفير الفرص للفئات الممثلة تمثيلًا ناقصًا."
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default Introduction;
