import PetersNet from "./PetersNet/Config";
import Demo from "./Demo/Config";
import CourtFrog from "./CourtFrog/Config";
import StChads from "./StChads/Config";
import PortsmouthMethodist from "./PortsmouthMethodist/Config";

export default function App() {
  const subdomain = window.location.host.split('.')[0];

  switch (subdomain) {
    case "demo": return <Demo />;
    case "courtfrog": return <CourtFrog />;
    case "stdavids": return <StDavids />;
    case "stjohns": return <StJohns />;
    case "stchads": return <StChads />;
    case "portsmethodist": return <PortsmouthMethodist />;
    default: return <PetersNet />;
  }
}