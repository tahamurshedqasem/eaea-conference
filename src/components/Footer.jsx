"use client";
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10" dir="rtl">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        {/* معلومات المؤتمر */}
        <motion.div
          className="text-center md:text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">مؤتمر EAEA 2025</h2>
          <p className="text-sm">
            انضم إلينا في 4 يونيو 2025 في لايبزيغ، ألمانيا، لاستكشاف مسارات
            التعلم المرنة لمجتمعات شاملة.
          </p>
        </motion.div>

        {/* روابط سريعة */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://eaea.org/category/eaea-annual-conference/"
                className="hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                مؤتمر EAEA السنوي
              </a>
            </li>
            <li>
              <a
                href="https://www.alecso.org/nsite/ar/newscat/3975-%D8%A7%D9%84%D9%85%D9%84%D8%AA%D9%82%D9%89-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A-%D8%A7%D9%84%D8%A3%D9%88%D9%84-%D9%84%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%83%D8%A8%D8%A7%D8%B1-%D9%88%D8%A7%D9%84%D8%AA%D8%B9%D9%84%D9%85-%D9%85%D8%AF%D9%89-%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9"
                className="hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                الملتقى العربي الأول لتعليم الكبار
              </a>
            </li>
            <li>
              <a
                href="https://asu.edu.eg/ar/ce/165/page"
                className="hover:text-yellow-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                جامعة عين شمس
              </a>
            </li>
          </ul>
        </motion.div>

        {/* روابط التواصل الاجتماعي */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">تابعونا</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-yellow-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="text-center mt-8 border-t border-blue-500 pt-4">
        <p className="text-sm">
          &copy; 2025 مؤتمر EAEA. جميع الحقوق محفوظة. تم التصميم بواسطة نورة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
