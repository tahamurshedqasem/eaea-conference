// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const workshops = [
//   {
//     title: "Sivistys: The Finnish Concept of Lifelong Learning",
//     facilitator: "Lauri Tuomi",
//     overview:
//       "Explore 'sivistys,' a transformative force extending from the individual to the community and society, emphasizing societal enlightenment and personal growth.",
//     image: "/images/image5.png",
//   },
//   {
//     title: "Education as a Cornerstone for Peaceful Societies",
//     facilitator: "Tarja Halonen",
//     overview:
//       "Discuss how participatory and inclusive societies are built through education, highlighting the role of lifelong learning in sustainable global development.",
//     image: "/images/image4.png",
//   },
//   {
//     title: "Active Citizenship through Democratic Engagement",
//     facilitator: "Robbie Guevara",
//     overview:
//       "Learn about engaging in democratic processes as transformative learning moments, emphasizing the importance of active participation in democracy.",
//     image: "/images/image3.png",
//   },
// ];

// const WorkshopsReview = () => {
//   return (
//     <section id="workshops" className="bg-white py-16 px-6">
//       <div className="container mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold text-gray-800 mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Review of the Workshops
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {workshops.map((workshop, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden p-4"
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//             >
//               <img
//                 src={workshop.image}
//                 alt={workshop.title}
//                 className="w-full h-48 object-cover mb-4"
//               />
//               <div className="text-left">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {workshop.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Facilitated by:{" "}
//                   <span className="font-medium">{workshop.facilitator}</span>
//                 </p>
//                 <p className="text-gray-700">{workshop.overview}</p>
//               </div>
//               <div className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-br-lg">
//                 Workshop
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkshopsReview;

"use client";
import React from "react";
import { motion } from "framer-motion";

const workshops = [
  {
    title: "Sivistys: المفهوم الفنلندي للتعلم مدى الحياة",
    facilitator: "لوري توومي",
    overview:
      "استكشف مفهوم 'Sivistys'، وهو قوة تحولية تمتد من الفرد إلى المجتمع، تؤكد على التنوير المجتمعي والنمو الشخصي.",
    image: "/images/image5.png",
  },
  {
    title: "التعليم كركيزة أساسية للمجتمعات السلمية",
    facilitator: "تارجا هالونين",
    overview:
      "ناقش كيف تُبنى المجتمعات التشاركية والشاملة من خلال التعليم، مع التركيز على دور التعلم مدى الحياة في التنمية العالمية المستدامة.",
    image: "/images/image4.png",
  },
  {
    title: "المواطنة النشطة من خلال المشاركة الديمقراطية",
    facilitator: "روبي جيفارا",
    overview:
      "تعرف على أهمية الانخراط في العمليات الديمقراطية كفرص للتعلم التحويلي، مع التأكيد على أهمية المشاركة النشطة في الديمقراطية.",
    image: "/images/image3.png",
  },
];

const WorkshopsReview = () => {
  return (
    <section id="workshops" className="bg-white py-16 px-6 text-right" dir="rtl">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          مراجعة ورش العمل
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden p-4"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  بتنظيم:{" "}
                  <span className="font-medium">{workshop.facilitator}</span>
                </p>
                <p className="text-gray-700">{workshop.overview}</p>
              </div>
              <div className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 text-sm rounded-br-lg">
                ورشة عمل
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsReview;
