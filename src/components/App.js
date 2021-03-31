import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import newApi from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({name: '', about: '', avatar: ''});
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    newApi.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function handleCardDelete(card) {
    newApi.deleteCard(card._id)
      .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
    })
      .catch((err) => {
        console.log('error', err)
      })
  }

  React.useEffect(() => {
    newApi.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, [])

  React.useEffect(() => {
    newApi.getProfileInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }, []);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setCard(card);
  }

  function handleUpdateUser(user) {
    newApi.editProfileInfo(user.name, user.about)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function handleUpdateAvatar(user) {
    newApi.addNewAvatar(user.avatar)
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function handleAddPlaceSubmit(picture) {
    newApi.addNewCard(picture.name, picture.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setCard(null)
  }

  React.useEffect(() => {
    // закрытие попапа кликом на esc
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    window.addEventListener('keydown', handleEscClose);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header/>
          <Login/>
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer/>
          <EditProfilePopup isOpen={isEditProfilePopupOpen}
                            onClose={closeAllPopups}
                            onUpdateUser={handleUpdateUser}/>
          <AddPlacePopup isOpen={isAddPlacePopupOpen}
                         onClose={closeAllPopups}
                         onAddPlace={handleAddPlaceSubmit}/>

          <ImagePopup onClose={closeAllPopups} card={selectedCard}/>

          <PopupWithForm name="popup-delete-card" title="Вы уверены?">
            <button type="submit" className="popup__button popup__button_small popup__button-place">Да</button>
          </PopupWithForm>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                           onUpdateAvatar={handleUpdateAvatar}/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
