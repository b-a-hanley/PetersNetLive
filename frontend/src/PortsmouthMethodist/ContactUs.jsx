import { TextContent, Page, GoogleMap, Img, Row } from "../components/Section";
import { ButtonGroup, FooterButtons } from "../components/Button";
import { Address } from "../components/Text";
import { Banner } from "./sections/Banner";

export default function ContactUs() {
  return (
    <Page>
      <Banner>Contact Us</Banner>

      <Row>
        <Img path="/public/assets/shared/Fishing-net.jpg" />

        <TextContent>
          We would love to hear from you! You can reach us by Email, to arrange an in-person or online meeting as we like to get to know the churches we work with. 
          <ButtonGroup 
            text="Email Us"
            buttonArray={[
              { text: "Minister", path: "/" },
              { text: "Anna Chaplain", path: "/" },  
              { text: "Secretary", path: "/" }
            ]}
          />
          <ButtonGroup
            text=""
            buttonArray={[  
              { text: "Lettings", path: "/" },
              { text: "Treasurer", path: "/" }, 
              { text: "Magazine Editor", path: "/" },
              { text: "Webmaster", path: "/" }, 
            ]}
          /> 
          <Address
            line1="Fareham"
            line2="Hampshire"
            line3="England"
          />
        </TextContent>
      </Row>

      <GoogleMap path="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.3986437228214!2d-1.072166!3d50.7867203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745db06799a503%3A0x1b2d287a2723f3be!2sPortsmouth%20Methodist%20Church%20(Trinity%20Building)!5e0!3m2!1sen!2suk!4v1775943455705!5m2!1sen!2suk" />

      <FooterButtons
        buttonArray={[
          { text: "Pricing", path: "/pricing" },
          { text: "Our Story", path: "/our-story" }
        ]}
      />

    </Page>
  );
}
