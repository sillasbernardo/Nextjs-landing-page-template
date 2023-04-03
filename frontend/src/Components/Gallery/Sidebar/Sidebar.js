import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.scss";
import { MobileViewContext } from "../../Context/MobileViewContext";
import SidebarSection from "./SidebarSection/SidebarSection";
import SidebarSectionItem from "./SidebarSection/SidebarSectionItem/SidebarSectionItem";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fetchApi } from "../../Utils/fetchApi";
import LoadingScreen from "../../Utils/LoadingScreen";

const Sidebar = (props) => {
/*   const [apiData, setApiData] = useState();
  fetchApi("api/gallery/categories", setApiData); */

  // Used only for offline fetching
  const apiData = {
    categoriesNames: [
      "Wedding",
      "Birthday",
      "Social"
    ]
  }

  const isMobile = useContext(MobileViewContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile only

  const openCloseSidebarMobileHandler = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <>
      <section
        onClick={openCloseSidebarMobileHandler}
        className={`sidebar-container ${props.className} ${
          isMobile && !isSidebarOpen && "sidebar-closed"
        }`}
      >
        {/* Applied only on mobile view and if sidebar is closed */}
        {isMobile && !isSidebarOpen && (
          <FontAwesomeIcon
            className="sidebar-container-icon"
            icon={faArrowRightToBracket}
          />
        )}

        {/* Applied on desktop view */}
        {!isMobile || isSidebarOpen ? (
          <div className="s-i-header">
            <h1>Photo Gallery</h1>
          </div>
        ) : null}
        {!isMobile || isSidebarOpen ? (
          <div className="s-i-content">
            <SidebarSection title="Home">
              <SidebarSectionItem navigateTo={"../"} isHomeSection title="Home" icon={faHome} />
            </SidebarSection>
            <SidebarSection title="Categories">
              {apiData ? (
                apiData.categoriesNames.map((category, index) => {
                  return (
                    <SidebarSectionItem
                      onCloseSidebar={openCloseSidebarMobileHandler}
                      key={index}
                      isCategorySection
                      title={category}
                      isActive={props.selectedCategory === category}
                    />
                  );
                })
              ) : (
                <LoadingScreen
                  timeout="600000"
                  spinnerColor="#fff"
                  className="s-i-spinner"
                />
              )}
            </SidebarSection>
          </div>
        ) : null}

      </section>

      {/* This backdrop is only applied if it's mobile */}
      {isMobile && isSidebarOpen && (
        <div onClick={openCloseSidebarMobileHandler} className="mobile-sidebar-container-backdrop"></div>
      )}
    </>
  );
};

export default Sidebar;
