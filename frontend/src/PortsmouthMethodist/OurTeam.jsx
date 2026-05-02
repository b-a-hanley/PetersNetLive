import { Banner } from './sections/Banner'
import { ButtonGroup, FooterButtons } from "../components/Button";
import { Img, Page, Row, TextContent, ProfileGrid } from '../components/Section'
import rayPhoto from '../../public/assets/PortsMethodist/Ray.png'
import susanPhoto from '../../public/assets/PortsMethodist/Susan.png'

export default function OurTeam() {
  return (
    <Page>
      <Banner>Our Team</Banner>
      <ProfileGrid
        profileArray={[
          {
            name: "Ray",
            role: "Minister",
            desc: "Ray is the Minister at Portsmouth Methodist and leads our church family.",
            photo: rayPhoto,
            buttonArray: [
                { text: "Contact me", path: "mailto:mission@church.com" },
                { text: "Ray's Story", path: "/ray" }
            ]
          }, 
          {
            name: "Susan",
            role: "Anna Chaplain",
            desc: "Susan offers spiritual support and companionship to the people of portsmouth.",
            photo: susanPhoto,
            buttonArray: [
              { text: "Contact me", path: "mailto:mission@church.com" },
              { text: "Find out more", path: "/susan" },  
            ]
          }

        ]}
      />

      <FooterButtons
        buttonArray={[
          { text: "Our Story", path: "/our-story" },
          { text: "Contact Us", path: "/contact-us" }
        ]}
      />

    </Page>
  );
}
