import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Gallery from "./Pages/Gallery";
import { MobileViewContext } from "./Components/Context/MobileViewContext";
import { wakeApi } from "./Components/Utils/fetchApi";

const App = () => {
  /* Define how pages and components will render based on the window width size.*/
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 950px)");
    setIsMobile(mediaQuery.matches);
    
    mediaQuery.addEventListener("change", () => {
      setIsMobile(mediaQuery.matches)
    })

    return () => mediaQuery.removeEventListener("change")


  }, [])

  wakeApi();

  return (
    <MobileViewContext.Provider value={isMobile}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/gallery/:id" element={<Gallery />} />
        </Routes>
      </Router>
    </MobileViewContext.Provider>
  );
};

export default App;
