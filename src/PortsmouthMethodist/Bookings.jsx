import { ButtonGroup, FooterButtons } from "../components/Button";
import { Page, Row, TextContent } from "../components/Section";
import { BaseText, Subtitle } from "../components/Text";
import { Banner } from "./sections/Banner";
import { Image } from "./sections/Image";

export default function Bookings() {
  return (
    <Page>
      <Banner>Bookings</Banner>
        <Row cols={3}>
            <Image path="Church1.png"/>
            <TextContent>
              <Subtitle>Trinity Church Hall</Subtitle>
              <BaseText>Our large church hall is available for hire Monday – Saturday for children’s parties, meetings, dances, exercise classes and the like. The approximate dimensions of the hall are 14m long x 8m wide. It its highest point the ceiling is 5m above the floor, coming down to 2.5m at the sides.  Whether you are looking for a one-off event or are interested in a regular booking please contact us to arrange a viewing and to discuss your needs.</BaseText>
            </TextContent>
            <Image path="Church2.png"/>
        </Row>
        <Row cols={3}> 
            <Image path="Eastney.png"/>
            <TextContent>
              <div class="py-6">
                <Subtitle>Eastney Church Hall</Subtitle>
                <BaseText>Our large church hall is available for hire Monday – Saturday for children’s parties, meetings, dances, exercise classes and the like. The approximate dimensions of the hall are 14m long x 8m wide. It its highest point the ceiling is 5m above the floor, coming down to 2.5m at the sides.  Whether you are looking for a one-off event or are interested in a regular booking please contact us to arrange a viewing and to discuss your needs.</BaseText>
              </div> 
            </TextContent>
            <Image path="EastneyInside.png"/>
        </Row>
        <Row>
          <Image class="margin-right:30px" path="Hire.png"/>
          <TextContent>
              <div class="py-6">
                <Subtitle>Contact Us for Lettings & Bookings</Subtitle>
                <BaseText>Looking for a space to hire? We offer flexible lettings to suit your needs — whether you’re planning a regular booking or a one-off event.</BaseText>
                <BaseText>Our spaces are ideal for meetings, rehearsals, community groups, workshops, and private functions. With competitive rates and a straightforward booking process, we make it easy to secure the space you need.</BaseText>
                <BaseText>Get in touch today to check availability, discuss your requirements, and arrange your booking. We’re happy to help you find the right fit.</BaseText>
              </div> 
              <ButtonGroup
                text="Trinity"
                buttonArray={[
                  { text: "Hall", href: "/ben-hanley" },
                  { text: "Conference Room", href: "/ben-hanley" },  
                  { text: "Prayer Room", href: "/ben-hanley" }, 
                ]}
              />
              <ButtonGroup
                text="Eastney"
                buttonArray={[
                  { text: "Hall", href: "/ben-hanley" },
                  { text: "Conference Room", href: "/ben-hanley" },  
                  { text: "Kitchen", href: "/ben-hanley" }, 
                ]}
              />
            </TextContent>
            
        </Row>
      <FooterButtons
        buttonArray={[
          { text: "Our Team", href: "/ben-hanley" },
          { text: "Contact Us", href: "/contact-us" }
        ]}
      />
    </Page>
  );
}