import { TextContent, Page, GoogleMap, Img, Row } from "../components/Section";
import { FooterButtons } from "../components/Button";
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
          <p className="mt-2 py-6 text-2xl font-bold tracking-tight text-colour sm:text-3xl">Email</p>
          
          
          <div className="flex w-full gap-1">
            <a
              href="mailto:benhanley321@gmail.com"
              className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action shadow-lg hover:bg-action rounded-lg"
            >
              Contact us
            </a>
          </div>

          <Address
            line1="Fareham"
            line2="Hampshire"
            line3="England"
          />
        </TextContent>
      </Row>

      <GoogleMap path="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40303.639587267244!2d-1.2362482267514863!3d50.85010139763092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874425648aac7c9%3A0xf7ae008bffaf7876!2sFareham!5e0!3m2!1sen!2suk!4v1756918070037!5m2!1sen!2suk" />

      <FooterButtons
        buttonArray={[
          { text: "Pricing", path: "/pricing" },
          { text: "Our Story", path: "Our Story" }
        ]}
      />

    </Page>
  );
}
