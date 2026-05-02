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

export default function Maintenance() {
  return (
    <Page>
      <Banner>Church Website Updates and Maintenance</Banner>

      {/* Main Section */}
      
        <Row>
                <Img path="/public/assets/shared/Fishing-net.jpg"/>
                <TextContent>
                    <Subtitle>Fixing bugs, creating updates and making adjustments</Subtitle>
                     If your church website does what it says on the tin, if you like familiarity, let us support you in that. Rather than rebuilding           the world we can make fixes, updates and tweaks, we charge a flat rate of £25 per hour on non-StPetersNet websites. In some occasions it may be more advisable to switch to our hosting, as you may end up saving more. We might even be able to recreate your previous appearance!
        
                </TextContent>
      </Row>
      {/* Programming Languages */}
      <div className="px-4 sm:px-6 lg:px-12 mt-8">

        <p className="text-2xl sm:text-3xl underline py-4 font-bold text-colour text-center">
          Programming language experience
        </p>
        <div className="flex flex-col gap-4 w-full">
          {languages.map((lang, index) => (
            <div key={index}>
              <span className="block text-sm font-medium mb-1">{lang.name}</span>
              <div className="w-full h-4 bg-white rounded-lg overflow-hidden">
                <div
                  className="h-4 bg-primary rounded-lg w-0 animate-fill"
                  style={{ "--target-width": `${lang.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Row>
        <TextContent>
          <BaseText>
              Don't see the programming language you use? No worries! Being effective
              in so many languages gives the great opportunity to learn new languages
              quickly.
          </BaseText>
        </TextContent>
      </Row>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes fill {
          from {
            width: 0;
          }
          to {
            width: var(--target-width);
          }
        }
        .animate-fill {
          animation: fill 1.5s ease forwards;
        }
      `}</style>
    </Page>
  );
}
