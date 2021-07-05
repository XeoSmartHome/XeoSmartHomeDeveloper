
import React from 'react';
import { Image } from '@themesberg/react-bootstrap';

import XeoLogo from "../assets/img/logo/xeosmarthome-logo-512x512.png";

export default (props) => {

  const { show } = props;

  return (
    <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${show ? "" : "show"}`}>
      <Image className="loader-element animate__animated animate__jackInTheBox" src={XeoLogo} height={40} />
    </div>
  );
};
