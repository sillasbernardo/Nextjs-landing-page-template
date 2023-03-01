import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Gallery from './Pages/Gallery';
import ErrorPage from './Pages/404';
import { MobileViewContext } from './Components/Context/MobileViewContext';
import { useWindowSize } from './Components/Utils/useWindowSize';
import { GalleryCategoryContext } from './Components/Context/GalleryCategoryContext';

const App = () => {
  /* Define how pages and components will render based on the window width size.*/
  const width = useWindowSize();
  const isMobile = width < 800;

  /* Define what category is being seen */
  const [galleryCategory, setGalleryCategory] = useState('Todos');

  return (
    <GalleryCategoryContext.Provider value={[galleryCategory, setGalleryCategory]}>
      <MobileViewContext.Provider value={isMobile}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Homepage />}/>
              <Route exact path="/gallery" element={<Gallery />}/>
              <Route element={<ErrorPage />}/>
            </Routes>
          </Router>
      </MobileViewContext.Provider>
    </GalleryCategoryContext.Provider>
  );
};

export default App;
