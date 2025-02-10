"use client";
import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const speakers = [
  {
    name: "إيزابيل كيمبف",
    title: "مديرة معهد اليونسكو للتعلم مدى الحياة",
    highlight:
      "الأماكن النشطة حيث يلتقي الناس ويتواصلون ويتعلمون معًا ضرورية للتعلم مدى الحياة.",
    image: "/images/image1.png",
  },
  {
    name: "تارجا هالونين",
    title: "رئيسة فنلندا السابقة",
    highlight: "السلام ليس غياب الحرب – إنه مجتمعات تشاركية وشاملة.",
    image: "/images/image3.png",
  },
  {
    name: "لورا كاستيل",
    title: "شبكة المبادرات المجتمعية الأوروبية",
    highlight: "تحتاج إلى بناء شيء جديد للتخلص من النظام القديم.",
    image: "/images/image2.png",
  },
];

const SpeakersSlider = () => {
  return (
    <section id="speakers" className="bg-gray-100 py-16 px-6 text-right">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          كلمات المتحدثين
        </motion.h2>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          className="max-w-3xl mx-auto"
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <li
                className={`inline-block w-3 h-3 rounded-full cursor-pointer mx-1 ${
                  isSelected ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
          {speakers.map((speaker, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg" dir="rtl">
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="mx-auto rounded-lg w-full h-50 object-cover mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {speaker.name}
              </h3>
              <p className="text-gray-600 mb-4">{speaker.title}</p>
              <blockquote className="italic text-gray-700 mb-8">
                "{speaker.highlight}"
              </blockquote>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SpeakersSlider;
