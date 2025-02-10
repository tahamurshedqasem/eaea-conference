// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { CheckCircle } from "lucide-react";

// const recommendations = [
//   {
//     title: "Promote Inclusive Learning Opportunities",
//     description:
//       "Develop and implement flexible learning strategies that cater to diverse learner needs, particularly focusing on marginalized groups.",
//   },
//   {
//     title: "Foster Community Engagement",
//     description:
//       "Create and support community learning spaces that encourage social interaction and collaborative learning.",
//   },
//   {
//     title: "Leverage Technology",
//     description:
//       "Utilize digital platforms and tools to make learning more accessible, especially for those with geographical or time constraints.",
//   },
//   {
//     title: "Encourage Policy Support",
//     description:
//       "Advocate for supportive policies that facilitate flexible learning structures and provide necessary resources.",
//   },
//   {
//     title: "Share Best Practices",
//     description:
//       "Establish networks for sharing successful flexible learning models and strategies among educators and institutions.",
//   },
// ];

// const Recommendations = () => {
//   return (
//     <section id="recommendations" className="bg-gray-100 py-16 px-6">
//       <div className="container mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-800 mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Recommendations
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {recommendations.map((rec, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//             >
//               <CheckCircle className="text-green-500 w-8 h-8 mr-4" />
//               <div className="text-left">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {rec.title}
//                 </h3>
//                 <p className="text-gray-600">{rec.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Recommendations;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const recommendations = [
  {
    title: "تعزيز فرص التعلم الشاملة",
    description:
      "تطوير وتنفيذ استراتيجيات تعلم مرنة تلبي احتياجات المتعلمين المتنوعة، مع التركيز بشكل خاص على الفئات المهمشة.",
  },
  {
    title: "تعزيز مشاركة المجتمع",
    description:
      "إنشاء ودعم مساحات تعلم مجتمعية تشجع على التفاعل الاجتماعي والتعلم التعاوني.",
  },
  {
    title: "الاستفادة من التكنولوجيا",
    description:
      "استخدام المنصات الرقمية والأدوات لجعل التعلم أكثر سهولة، خاصة لأولئك الذين يعانون من قيود جغرافية أو زمنية.",
  },
  {
    title: "تشجيع دعم السياسات",
    description:
      "الدعوة إلى سياسات داعمة تسهل هياكل التعلم المرنة وتوفر الموارد اللازمة.",
  },
  {
    title: "مشاركة أفضل الممارسات",
    description:
      "إنشاء شبكات لمشاركة نماذج واستراتيجيات التعلم المرن الناجحة بين المعلمين والمؤسسات.",
  },
];

const Recommendations = () => {
  return (
    <section
      id="recommendations"
      className="bg-gray-100 py-16 px-6 text-right"
      dir="rtl"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          التوصيات
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="flex items-start bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <CheckCircle className="text-green-500 w-8 h-8 ml-4" />
              <div className="text-right">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {rec.title}
                </h3>
                <p className="text-gray-600">{rec.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
