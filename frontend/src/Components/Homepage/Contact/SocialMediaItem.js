import React from "react";

import './SocialMediaItem.scss';

const SocialMediaItem = (props) => {
  return (
    <div className="socialmedia-item">
      <img
        className="socialmedia-logo"
        width={30}
        src={props.image}
        alt="img"
      />
      <span onClick={() => window.open(props.link)} className="socialmedia-info">{props.info}</span>
    </div>
  );
};

export default SocialMediaItem;