import React from "react";
import PopupWithForm from "./PopupWithForm";
import ok from "../images/ok.svg";
import err from "../images/error.svg";


function InfoTooltip(props) {

  return(
    <PopupWithForm name="registration_ok" closeAllPopups={props.onClose} isInfoTooltipOpen={props.isOpen}>
      <img src={props.isRegisterSuccessful ? ok : err} alt="значок статуса регистрации" className="popup__reg-ico"/>
      <h3 className="popup__title popup__title_reg">
        {props.isRegisterSuccessful ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так!\n' +
          'Попробуйте ещё раз.'}</h3>
    </PopupWithForm>
  )
}

export default InfoTooltip

