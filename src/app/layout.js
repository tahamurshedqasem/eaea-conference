import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "eaea-conference",
  description:
    "انعقد المؤتمر السنوي لرابطة تعليم الكبار في معهد هلسنكي للموسيقى في 12 يونيو 2024. وقد تم تنظيم المؤتمر بالتعاون مع المجلس الدولي لتعليم الكبار (ICAE) واستضافته مؤسسة التعلم مدى الحياة الفنلندية (Kvs). وفي المجمل، اجتذب الحدث 150 مشاركًا من 34 دولة حول العالم. ركز المؤتمر على الطرق التي يمكن أن يؤدي بها تعليم الكبار إلى إحداث تغييرات كبيرة في الأفراد والمجتمعات والمجتمع ككل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
