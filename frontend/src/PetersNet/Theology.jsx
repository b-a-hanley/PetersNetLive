import { Page, Row, Img, TextContent } from "../components/Section";
import { BaseText, Subtitle} from "../components/Text";
import { Banner } from "./sections/Banner";

const languages = [
  { name: "Wix", percent: 80 },
  { name: "PHP", percent: 60 },
  { name: "Flutter (Dart)", percent: 55 },
  { name: "C#", percent: 45 },
  { name: "JavaScript/HTML/CSS", percent: 45 },
  { name: "WordPress", percent: 30 },
  { name: "Python", percent: 30 },
  { name: "Delphi", percent: 30 },
  { name: "Java", percent: 25 },
  { name: "SQL & NoSQL Databases", percent: 50 },
];

export default function Theology() {
  return (
    <Page>
      <Banner>Website Theology</Banner>

      {/* Main Section */}
      <Row>
          <Img path="/public/assets/shared/Fishing-net.jpg"/>
          <TextContent>
              <Subtitle>Sola Gloria Deo</Subtitle>
              "To God be the glory!" In our cluttered and disordered use of the internet and software, church websites have the opportunity to be a distinct expression of the glory of god. I pray it is my aim that we maybe able to uplift churches as places in which God dwells and that God may dwell with its expressions.
          </TextContent>
      </Row>
      <Row>
        <Img path="/public/assets/shared/Fishing-net.jpg"/>
        <TextContent>
            <Subtitle>The Great Commission</Subtitle>
            May we be reminded that we are all called to reach out to the lost, the broken, the poor.
        </TextContent>
      </Row>
      <Row>
        <Img path="/public/assets/shared/Fishing-net.jpg"/>
        <TextContent>
            <Subtitle></Subtitle>
            
        </TextContent>
      </Row>
    </Page>
  );
}
