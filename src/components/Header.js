import React from "react";
import logo from '../images/logo.svg';
import {useHistory} from "react-router-dom";


function Header(props) {
  const history = useHistory();

  let onClick;
  let title;
  let email

  switch (props.currentPath) {
    //Вход
    case '/signin':
      onClick = function () {
        history.push('/signup')
      }
      title = 'Регистрация'
      break;
      //Регистрация
    case '/signup':
      onClick = function () {
        history.push('/signin')
      }
      title = 'Войти'
      break;
    default:
      onClick = function () {
        history.push('/signin')
        props.onLogOut()
      }
      title = 'Выйти'
      email = props.email
  }

  return (
    <header className="header root__header">
      <img src={logo} alt="логотип сайта" className="header__logo"/>
      <div className="header__group">
        <p className="header__email">{email}</p>
        <button className="header__button" onClick={onClick}>{title}</button>
      </div>
    </header>
  );
}

export default Header;

