import React from 'react';

import './Footer.scss';

const Footer = (props) => {
  return (
    <div className={props.className || "footer-container"}>
      <span>Copyright © 2023 - Sillas Bernardo</span>
    </div>
  );
};

export default Footer;
