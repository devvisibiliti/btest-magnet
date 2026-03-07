export const metadata = {
  title: "Home | Magnetronix",
  description: "Best products and services for your customers.",
};
// import SearchBar from './components/SearchBar'
import Benefits from "./components/Benefits";
import AnimatedReviewSection from "./components/CustomerReview";
import Faq from "./components/Faq";
// import Faq1 from "./components/Faq1";
// import HeroSection from "./components/HeroSection";
import IndustrialSolutions from "./components/IndustrialSolutions";
import ProductContainer from "./components/ProductContainer";
import ProductPanel from "./components/ProductPanel";
import ReviewSection from "./components/ReviewSection";

import Video from "./components/Video";

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      
      <IndustrialSolutions />
      <Benefits />
      <ReviewSection />
      <ProductContainer />
      <ProductPanel />
      
      <AnimatedReviewSection />
      
      <Faq />
      {/* <Faq1 /> */}
      <Video />
    </main>
  );
}

