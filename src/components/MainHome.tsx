import { useEffect, useState } from "react";
import Home from "./Home"; // Import PC/Tablet version
import MobileHome from "./MobileHome"; // Import Mobile version

const MainHome = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const handleTurnPages = () => {
    return null;
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHome handleTurnPages={handleTurnPages} /> : <Home />;
};

export default MainHome;
