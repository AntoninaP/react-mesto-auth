import React from "react";
import PopupWithForm from "./PopupWithForm";
import ok from "../images/ok.svg";


function InfoTooltip(props) {

  return(
    <PopupWithForm name="registration_ok" closeAllPopups={props.onClose} isInfoTooltipOpen={props.isOpen}>
      <img src={ok} alt="значок успешной регистрации" className="popup__reg-ico"/>
      <h3 className="popup__title popup__title_reg">Вы успешно зарегистрировались!</h3>
    </PopupWithForm>
  )
}

export default InfoTooltip

