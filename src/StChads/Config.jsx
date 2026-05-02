import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../Demo/Header";
import Footer from "./Footer";
import Home from "../Demo/Home";
import Pricing from "./Pricing";
import OurStory from "../Demo/OurStory";
import BenHanley from "./BenHanley";
import ContactUs from "../Demo/ContactUs";
import Maintenance from "../Demo/Maintenance";
import EventsCarousel from "../components/Carousel";
import Error from "./Error";

export const churchName = "St Chads";
export const colour = "Blue";

export default function StChads() {
  return (
    <Router> 
      <head>
        <title>PetersNet - Affordable Church Websites</title>
        <meta
          name="description"
          content="Affordable church website design and Christian web development - Mobile-friendly sites built to support ministries and grow God's Kingdom."
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/public/assets/Logo-brown-flav.png" />
        <link rel="stylesheet" href={"/assets/css/"+colour+".css"}/>
        <link rel="stylesheet" href="/public/assets/css/General.css" />
      </head>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/ben-hanley" element={<BenHanley />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/events" element={<EventsCarousel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}