// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X, User } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen);
//   };

//   return (
//     <motion.nav
//       className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg w-full z-20"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 70, damping: 10 }}
//     >
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-row-reverse">
//         <motion.h1
//           className="text-3xl font-extrabold text-white tracking-wide"
//           whileHover={{ scale: 1.1 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           dir="rtl"
//         >
//           مؤتمر EAEA 2025
//         </motion.h1>

//         <div className="md:hidden text-white flex items-center space-x-4 space-x-reverse">
//           <div onClick={toggleProfile} className="cursor-pointer">
//             <User size={28} />
//           </div>
//           <div onClick={toggleMenu} className="cursor-pointer">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </div>
//         </div>

//         <ul
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } md:flex space-x-8 space-x-reverse text-white text-lg flex-col md:flex-row absolute md:static top-16 right-0 bg-blue-500 md:bg-transparent w-full md:w-auto p-4 md:p-0 z-10`}
//           dir="rtl"
//         >
//           {[
//             { label: "المقدمة", id: "introduction" },
//             { label: "المتحدثون", id: "speakers" },
//             { label: "ورش العمل", id: "workshops" },
//             { label: "التوصيات", id: "recommendations" },
//           ].map((item, index) => (
//             <motion.li
//               key={item.id}
//               whileHover={{ scale: 1.1 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + index * 0.1 }}
//               className="text-center md:text-right"
//             >
//               <a
//                 href={`#${item.id}`}
//                 className="hover:text-yellow-300 transition-colors duration-300"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>

//         <div className="hidden md:flex items-center space-x-4 space-x-reverse">
//           <motion.a
//             href="#register"
//             className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl shadow-md hover:bg-yellow-500 transition-all duration-300"
//             whileHover={{ scale: 1.1 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//           >
//             التسجيل
//           </motion.a>
//           <div onClick={toggleProfile} className="cursor-pointer text-white">
//             <User size={28} />
//           </div>
//         </div>

//         {profileOpen && (
//           <div className="absolute top-16 right-6 bg-white text-black shadow-lg rounded-lg p-4 z-20">
//             <p className="font-semibold">الملف الشخصي</p>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <a href="/profile" className="hover:text-blue-500">
//                   عرض الملف
//                 </a>
//               </li>
//               <li>
//                 <a href="#settings" className="hover:text-blue-500">
//                   الإعدادات
//                 </a>
//               </li>
//               <li>
//                 <a href="#logout" className="hover:text-red-500">
//                   تسجيل الخروج
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg w-full z-20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 10 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-row-reverse">
        <motion.h1
          className="text-3xl font-extrabold text-white tracking-wide"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          dir="rtl"
        >
          مؤتمر EAEA 2025
        </motion.h1>

        <div className="md:hidden text-white flex items-center space-x-4 space-x-reverse">
          <div onClick={toggleProfile} className="cursor-pointer">
            <User size={28} />
          </div>
          <div onClick={toggleMenu} className="cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        <ul
          className={`$${
            isOpen ? "flex" : "hidden"
          } md:flex space-x-8 space-x-reverse text-white text-lg flex-col md:flex-row absolute md:static top-16 right-0 bg-blue-500 md:bg-transparent w-full md:w-auto p-4 md:p-0 z-10`}
          dir="rtl"
        >
          {[
            { label: "المقدمة", id: "introduction" },
            { label: "المتحدثون", id: "speakers" },
            { label: "ورش العمل", id: "workshops" },
            { label: "التوصيات", id: "recommendations" },
            { label: "رأي الطالبة", id: "student-opinion" },
          ].map((item, index) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center md:text-right"
            >
              <a
                href={`#${item.id}`}
                className="hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <motion.a
            href="#register"
            className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-xl shadow-md hover:bg-yellow-500 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            التسجيل
          </motion.a>
          <div onClick={toggleProfile} className="cursor-pointer text-white">
            <User size={28} />
          </div>
        </div>

        {profileOpen && (
          <div className="absolute top-16 right-6 bg-white text-black shadow-lg rounded-lg p-4 z-20">
            <p className="font-semibold">الملف الشخصي</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/profile" className="hover:text-blue-500">
                  عرض الملف
                </a>
              </li>
              <li>
                <a href="#settings" className="hover:text-blue-500">
                  الإعدادات
                </a>
              </li>
              <li>
                <a href="#logout" className="hover:text-red-500">
                  تسجيل الخروج
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
