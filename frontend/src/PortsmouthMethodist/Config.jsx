import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./Home";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import ContactUs from "./ContactUs";
import EventsCarousel from "../components/Carousel"
import Streams from "./ChurchOnline";
import Error from "./Error";
import Bookings from "./Bookings";
import ChurchOnline from "./ChurchOnline";

export const churchName = "Portsmouth Methodist";
export const email = "benhanley321@gmail.com";
export const telephone = "07445535292";
export const colour = "Blue";
export const ImgPath = "../../../public/assets/PortsMethodist/";

export default function PortsmouthMethodist() {
  return (
    <Router> 
      <head>
        <title>Portsmouth Methodist Church</title>
        <meta
          name="description"
          content="Affordable church website design and Christian web development - Mobile-friendly sites built to support ministries and grow God's Kingdom. "
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/public/assets/Logo-brown-flav.png" />
        <link rel="stylesheet" href={"/assets/css/"+colour+".css"}/>
        <link rel="stylesheet" href="/public/assets/css/General.css" />
      </head>
      <Header
        buttonArray={[
          { text: "Our Story", path: "/our-story" },
          { text: "Our Team", path: "/our-team" }, 
          { text: "Bookings", path: "/bookings" }, 
          { text: "Church Online", path: "/online" },
          { text: "PetersNet", path: "http://localhost:5173/" }, 
          { text: "Contact Us", path: "/contact-us", cta: true }
        ]}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<EventsCarousel />} />
          <Route path="/streams" element={<Streams />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/online" element={<ChurchOnline />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer
        buttonArray={[
          { text: "Home", path: "/" },
          { text: "Our Story", path: "/our-story" },
          { text: "Our Team", path: "/our-team" },
          { text: "Bookings", path: "/bookings" },
          { text: "PetersNet", path: "http://localhost:5173/" },
          { text: "Contact Us", path: "/contact-us" },
          { text: "Privacy Policy", path: "https://www.tmcp.org.uk/about/data-protection/managing-trustees-privacy-notice" },
        ]}
      />
    </Router>
  );
}