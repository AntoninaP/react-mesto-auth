import React from "react";
import logo from '../images/logo.svg';
import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header root__header">
      <img src={logo} alt="логотип сайта" className="header__logo"/>
      <Link to={props.currentPath === '/signin'? '/signup': '/signin'}
            className="header__link">{props.currentPath === '/signin'? 'Регистрация': 'Войти'} </Link>
    </header>
  );
}

export default Header;

