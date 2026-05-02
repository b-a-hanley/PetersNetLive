import PricingSection from "./sections/PricingSection";
import { Divider, Hero } from "../components/Section";
import OurStorySection from "./sections/OurStorySection";

export default function Home() {
  return (
    <>
        <Hero path="../../public/assets/shared/Fishing-net-alt.jpg" top={50} bottom={500}>Helping church websites spread the Word on the internet</Hero>
        <PricingSection />
        <Divider><OurStorySection/></Divider>
    </>
  );
}