/**
 * Renders a sidebar section item based on its type
 * @param {boolean} props.isHomeSection - Component renders a home section item style
 * @param {boolean} props.isCategorySection - Component renders a category section item style
 * @param {boolean} props.isActive - Change color
 * @param {string} props.title  - Define title name
 * @param {icon} props.icon  - Define icon from fontawesome, only applied if isHomeSection is true
 */

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./SidebarSectionItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImagesFetchContext } from "../../../GalleryContext/ImagesFetchContext";

const SidebarSectionItem = (props) => {
  const [imagesFetch, setImagesFetch] = useContext(ImagesFetchContext);

  if (props.isHomeSection && props.title && props.icon) {
    return (
      <Link className="sidebar-link" to={props.navigateTo}>
        <div key={props.key} className="h-sidebar-section-item">
          <FontAwesomeIcon className="h-s-s-icon" icon={props.icon} />
          <p className="h-s-s-text">{props.title}</p>
        </div>
      </Link>
    );
  } else if (props.isCategorySection && props.title) {
    return (
      <Link onClick={() => setImagesFetch({ imagesId: props.title, isSidebarCall: true })} className="sidebar-link" to={`/gallery/${props.title}`}>
        <div key={props.indexKey} className="c-sidebar-section-item">
          <p className={`${props.isActive && "text-active"} c-s-s-text`}>
            {props.title}
          </p>
          <div
            className={`${props.isActive && "circle-active"} c-s-s-circle`}
          ></div>
        </div>
      </Link>
    );
  }
};

export default SidebarSectionItem;
