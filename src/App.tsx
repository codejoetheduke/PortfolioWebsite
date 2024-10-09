import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Experience, Navigation } from "./components/index";
import Loader from "./components/Loader"; // Import the loader component
import "./index.css";
import MainHome from "./components/MainHome";

function App() {
  const [isChecked, setIsChecked] = useState(false); // Default unchecked
  const [loading, setLoading] = useState(true); // Track loading state

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Update based on event target
  };

  // Simulate loading process, like fetching data or waiting for assets
  useEffect(() => {
    // Simulate a loading process with setTimeout (you can replace this with actual data fetching or asset loading)
    const timer = setTimeout(() => {
      setLoading(false); // Once done, hide the loader
    }, 2000); // Simulate a 2-second loading time

    // Clean up the timer in case the component unmounts before the loading is finished
    return () => clearTimeout(timer);
  }, []);

  // If still loading, show the loading screen
  if (loading) {
    return <Loader />;
  }

  // Otherwise, show the main app
  return (
    <>
      <Navigation
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Routes>
        <Route path="/" element={<Experience isChecked={isChecked} />} />
        <Route path="/home" element={<MainHome />} />
      </Routes>
    </>
  );
}

export default App;
