"use client";
import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-indigo-200 py-16 px-6 min-h-screen flex items-center justify-center">
      <motion.div
        className="container mx-auto max-w-3xl bg-white shadow-2xl rounded-2xl p-10 relative border-t-8 border-blue-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* University and College Logos */}
        <div className="flex justify-between items-center mb-8">
          <img
            src="/images/king logo.jpg"
            alt="University Logo"
            className="w-24 h-24 object-contain rounded-full border-4 border-blue-500 shadow-md"
          />
          <img
            src="/images/college logo.jpg"
            alt="College Logo"
            className="w-24 h-24 object-contain rounded-full border-4 border-indigo-500 shadow-md"
          />
        </div>

        {/* Profile Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6 underline decoration-indigo-500">
            الملف الشخصي للطالبة
          </h1>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right bg-gray-50 p-6 rounded-xl shadow-inner"
            dir="rtl"
          >
            <div>
              <p className="text-xl font-bold text-gray-700 mb-1">
                اسم الطالبة:
              </p>
              <p className="text-lg text-gray-600">نورة آل سرور</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-700 mb-1">
                اسم الدكتورة:
              </p>
              <p className="text-lg text-gray-600">د. منال الشبلي</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-700 mb-1">
                الرقم الجامعي:
              </p>
              <p className="text-lg text-gray-600">446200201</p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-700 mb-1">الشعبة:</p>
              <p className="text-lg text-gray-600"> 47135</p>
            </div>
          </div>

          {/* Organizer Info */}
          <div className="mt-10 bg-blue-50 p-4 rounded-lg shadow-md">
            <p className="text-xl font-bold text-blue-700 mb-2">
              اسم الجهة المنظمة للمؤتمر:
            </p>
            <p className="text-lg text-gray-600">
              رابطة تعليم الكبار الأوروبية (EAEA)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Profile;
