import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Gallery from './Pages/Gallery';
import ErrorPage from './Pages/404';
import { MobileViewContext } from './Components/Context/MobileViewContext';
import { useWindowSize } from './Components/Utils/useWindowSize';
import { GalleryCategoryContext } from './Components/Context/GalleryCategoryContext';

const App = () => {
  /*
   * Define how pages and components will render based on the window width size.
   */
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowSize();

  useEffect(() => {
    if (width < 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/gallery',
      element: <Gallery />,
      errorElement: <ErrorPage />,
    },
  ]);

  /*
    * Define what category is being seen
   */
  const [galleryCategory, setGalleryCategory] = useState('Todos');

  return (
    <GalleryCategoryContext.Provider value={[galleryCategory, setGalleryCategory]}>
      <MobileViewContext.Provider value={isMobile}>
          <RouterProvider router={router} />
      </MobileViewContext.Provider>
    </GalleryCategoryContext.Provider>
  );
};

export default App;
