import PricingSection from "./sections/PricingSection";
import { Hero } from "../components/Section";
import OurStorySection from "./sections/OurStorySection";

export default function Home() {
  return (
    <>
        <Hero path="../../public/assets/shared/Fishing-net.jpg" top={550} bottom={50}>Helping church websites spread the Word on the internet</Hero>
        <PricingSection />
        <OurStorySection/>
    </>
  );
}