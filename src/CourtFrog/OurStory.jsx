import OurStorySection from "./sections/OurStorySection";
import { FooterButtons } from "../components/Button";
import { Page } from "../components/Section";

export default function OurStory() {
  return (
    <Page>
      <Banner churchName={churchName}>Our Story</Banner>
      <OurStorySection />
      <FooterButtons
              buttonArray={[
                { text: "Email", path: "mailto:benhanley321@gmail.com" },
                { text: "LinkedIn", path: "https://www.linkedin.com/in/ben-hanley-524b94253/" },
                { text: "Github", path: "https://github.com/b-a-hanley" },
                { text: "PDF CV", path: "/cv.pdf" }
              ]}
            />
    </Page>
  );
}