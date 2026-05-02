import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Pricing from "./Pricing";
import OurStory from "./OurStory";
import BenHanley from "./BenHanley";
import ContactUs from "./ContactUs";
import Maintenance from "./Maintenance";
import EventsCarousel from "../components/Carousel";
import Error from "./Error";

export const churchName = "CourtFrog";
export const colour = "Blue";

export default function CourtFrog() {
  return (
    <Router>
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