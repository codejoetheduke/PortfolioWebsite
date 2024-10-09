import { useEffect, useState } from "react";
import Home from "./Home"; // Import PC/Tablet version
import MobileHome from "./MobileHome"; // Import Mobile version

const MainHome = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHome /> : <Home />;
};

export default MainHome;
