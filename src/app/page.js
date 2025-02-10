import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Recommendations from "@/components/Recommendations";
import SpeakersSlider from "@/components/SpeakersSlider";
import WorkshopsReview from "@/components/WorkshopsReview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Introduction />
      <SpeakersSlider />
      <WorkshopsReview />
      <Recommendations />
      <Footer/>
    </div>
  );
}
