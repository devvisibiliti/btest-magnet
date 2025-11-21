export const metadata = {
  title: "Home | Your Brand",
  description: "Best products and services for your customers.",
};

import Faq from "./components/Faq";
import Faq1 from "./components/Faq1";
import HeroSection from "./components/HeroSection";
import IndustrialSolutions from "./components/IndustrialSolutions";
import ReviewSection from "./components/ReviewSection";
import Video from "./components/Video";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IndustrialSolutions />
      <ReviewSection />
      <Faq />
      <Faq1 />
      <Video />
    </main>
  );
}

