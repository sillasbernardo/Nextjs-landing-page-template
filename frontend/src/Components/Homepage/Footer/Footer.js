import React from 'react';

import './Footer.scss';

const Footer = (props) => {
  return (
    <footer className={props.className || "footer-container"}>
      <span>Copyright © 2023 - Sillas Bernardo</span>
    </footer>
  );
};

export default Footer;
