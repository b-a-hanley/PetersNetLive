
import { Divider, Hero, HeroDiv, TextContent, Row, Img } from "../components/Section";
import PortsmouthMethodist from "../../public/assets/PortsMethodist/PortsmouthMethodist.jpg"; 

export default function Home() {
  return (
    <>
        <HeroDiv path={PortsmouthMethodist} top={200} bottom={225}> 
          <p className="mt-2 text-4xl font-bold tracking-tight text-shadow-lg text-white sm:text-5xl">
             To know Jesus and make him known
          </p>
          <Divider>
              <row>
                <Img 
                  path="/public/assets/PortsMethodist/Chatting.jpg"
                  className="w-full md:w-1/2 rounded-lg object-cover"
                /> 
              </row>
          </Divider>
        </HeroDiv> 
    </>
  );
}