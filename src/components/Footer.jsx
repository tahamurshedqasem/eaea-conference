// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-600 text-white py-10">
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Conference Info */}
//         <motion.div
//           className="text-center md:text-left"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl font-bold mb-4">EAEA Conference 2025</h2>
//           <p className="text-sm">
//             Join us on June 4, 2025, in Leipzig, Germany, to explore flexible
//             learning pathways for inclusive societies.
//           </p>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#introduction"
//                 className="hover:text-yellow-300 transition-colors"
//               >
//                 Introduction
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#speakers"
//                 className="hover:text-yellow-300 transition-colors"
//               >
//                 Speakers
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#workshops"
//                 className="hover:text-yellow-300 transition-colors"
//               >
//                 Workshops
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#recommendations"
//                 className="hover:text-yellow-300 transition-colors"
//               >
//                 Recommendations
//               </a>
//             </li>
//           </ul>
//         </motion.div>

//         {/* Social Media Links */}
//         <motion.div
//           className="text-center md:text-right"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//           <div className="flex justify-center md:justify-end space-x-4">
//             <a href="#" className="hover:text-yellow-300">
//               <Facebook className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-yellow-300">
//               <Twitter className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-yellow-300">
//               <Linkedin className="w-6 h-6" />
//             </a>
//             <a href="#" className="hover:text-yellow-300">
//               <Mail className="w-6 h-6" />
//             </a>
//           </div>
//         </motion.div>
//       </div>
//       <div className="text-center mt-8 border-t border-blue-500 pt-4">
//         <p className="text-sm">
//                   &copy; 2025 EAEA Conference. All rights reserved.
//                   done by Noura 
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
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
                href="#introduction"
                className="hover:text-yellow-300 transition-colors"
              >
                المقدمة
              </a>
            </li>
            <li>
              <a
                href="#speakers"
                className="hover:text-yellow-300 transition-colors"
              >
                المتحدثون
              </a>
            </li>
            <li>
              <a
                href="#workshops"
                className="hover:text-yellow-300 transition-colors"
              >
                ورش العمل
              </a>
            </li>
            <li>
              <a
                href="#recommendations"
                className="hover:text-yellow-300 transition-colors"
              >
                التوصيات
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
