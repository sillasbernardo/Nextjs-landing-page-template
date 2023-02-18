import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
/* import { CSSTransition } from 'react-transition-group'; */

import Backdrop from './Backdrop';
import './Modal.scss';

const Modal = (props) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (props.onOpenNavbar) {
      setIsShow(true);
    }
  }, [props.onOpenNavbar]);

  const content = (
    <React.Fragment>
      {props.children}
      {props.onOpenNavbar && <Backdrop onCloseNavbar={props.onCloseNavbar} />}
    </React.Fragment>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById('navbar-modal-hook')
  );
};

export default Modal;
