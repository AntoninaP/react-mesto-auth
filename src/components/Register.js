import React from "react";

function Register() {

return(
  <div className="popup__form popup__form_login">
    <h3 className="popup__title popup__title_login">Регистрация</h3>
    <label>
      <input id="email-input" type="email" name="email" value=''
             className="popup__input popup__input_login"
             placeholder="Email" required minLength="2" maxLength="40"
             pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"/>
      <span className="popup__input-error">
            </span>
    </label>
    <label>
      <input id="password-input" type="text" name="password" value=''
             className="popup__input popup__input_login"
             placeholder="Пароль" required minLength="2" maxLength="10"/>
      <span className="popup__input-error">
            </span>
    </label>
    <button type="submit" className="popup__button popup__button_login">Зарегистрироваться</button>
    <p className="popup__subtitle">Уже зарегистрированы? <a href='' className="link">Войти</a></p>
  </div>
)
}

export default Register
