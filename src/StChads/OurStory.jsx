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
          { text: "Our Team", href: "/ben-hanley" },
          { text: "Contact Us", href: "/contact-us" }
        ]}
      />
    </Page>
  );
}