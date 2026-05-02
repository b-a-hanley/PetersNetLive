import OurStorySection from "./sections/OurStorySection";
import { FooterButtons } from "../components/Button";
import { Page } from "../components/Section";
import { Banner } from "./sections/Banner";

export default function OurStory() {
  return (
    <Page>
      <Banner>Our Story</Banner>
      <OurStorySection />
      <FooterButtons
        buttonArray={[
          { text: "Our Story", path: "/our-story" },
          { text: "Contact Us", path: "/contact-us" }
        ]}
      />
    </Page>
  );
}