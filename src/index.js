

import "./style.css";
import "./js/Card.js";
import "./js/CardList.js";
import "./js/API.js";
import "./js/FormValidator.js";
import "./js/Popup.js";
import "./js/UserInfo.js";
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort9' : 'https://praktikum.tk/cohort9';
export const listContainer = document.querySelector('.places-list');
export const popupEditButton = document.querySelector('.popup__edit-button'); 
import Api from './js/API.js';
import {Card} from './js/Card.js';
import {CardList} from './js/CardList.js';
import FormValidator from './js/FormValidator.js';
import Popup from './js/Popup.js';
import UserInfo from './js/UserInfo';
export {  editForm,  editButton, closeEditForm, formEdit,  nameValueForm, jobValueForm};



const newForm = document.forms.new;
const editForm = document.querySelector('.popup__form-edit');


const editButton = document.querySelector('.user-info__edit-button');
const closeEditForm = document.querySelector('#popup__close-edit');
const formEdit = document.forms.edit;


let nameValueForm = '';
let jobValueForm = '';  
const config = {
  baseUrl: serverUrl,
 
  headers: {
      authorization: '6af9b0d5-fde9-4d91-8997-d01e8790c6cd',
      'Content-Type': 'application/json'
  },
  myId: 'a40874464229b384c21cc7e2'
};

 const api = new Api(config);
 const userInfo = new UserInfo(
     document.querySelector('.user-info__name'),
     document.querySelector('.user-info__job'),
     document.querySelector('.user-info__photo')
 );
 
 userInfo.create();
 api.getUserInfo().then((data) => {
     userInfo.updateUserInfo(data.name, data.about, data.avatar);
     console.log(data.avatar);
 });



const card = new Card();
const cardList = new CardList(card, api);
const validator = new FormValidator();
const popup = new Popup();


const popupProfile = new Popup(document.getElementById('profile'), document.forms.edit, userInfo);
popup.eventListeners();

const popupProfileValidate = new FormValidator(document.getElementById('profile'));
popupProfileValidate.setEventListeners(document.querySelector('#username'));
popupProfileValidate.setEventListeners(document.querySelector('#about'));
document.querySelector('.user-info__edit-button').addEventListener('click', (event) => {
    popupProfile.open(event);
});

 



 document.forms.edit.addEventListener('input',(event) => {
      
  validator.checkInputValidity(event);

  validator.setSubmitButtonState();
});





 

 function inputUserCard(event) {
  const name = event.currentTarget.elements.name;
  const img = event.currentTarget.elements.link;

  if (name.value.length === 0 || img.value.length === 0) {
    document.querySelector('.popup__card-button').setAttribute('disabled', '');

  }
  else {
    document.querySelector('.popup__card-button').removeAttribute('disabled');
  }


}
function addCardUser(event) {

  event.preventDefault();
  const imageUrl = newForm.elements.link.value;
  const cardName = newForm.elements.name.value;
  if (imageUrl.length !== 0 && cardName.length !== 0) {

    cardList.addCard(imageUrl, cardName);

    popup.toggleNewPopup();
  }
  return [imageUrl, cardName];

}

newForm.addEventListener('input', inputUserCard);
newForm.addEventListener('submit', addCardUser);

cardList.getApi();
cardList.addButtons();

document.forms.edit.addEventListener('submit', (event) => {
  event.preventDefault();
  userInfo.updateUserInfo(document.forms.edit.nameUser.value, document.forms.edit.jobUser.value);
  api.setUserInfo(document.forms.edit.nameUser.value, document.forms.edit.jobUser.value);
  popupProfile.close();
});
 