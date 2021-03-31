import React from "react";
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header root__header">
      <img src={logo} alt="логотип сайта" className="header__logo"/>
    </header>
  );
}

export default Header;
