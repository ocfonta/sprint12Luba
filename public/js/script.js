
const listContainer = document.querySelector('.places-list');

const newForm = document.forms.new;
const editForm = document.querySelector('.popup__form-edit');
const popupEditButton = document.querySelector('.popup__edit-button');

const editButton = document.querySelector('.user-info__edit-button');
const closeEditForm = document.querySelector('#popup__close-edit');
const formEdit = document.forms.edit;
let errorStatus = false;

let nameValueForm = '';
let jobValueForm = '';

const api = new Api({
  headers: {
    authorization: '6af9b0d5-fde9-4d91-8997-d01e8790c6cd',
    'Content-Type': 'application/json'
  }
});
const card = new Card();
const cardList = new CardList(card, api);
const validator = new FormValidator();
const popup = new Popup();
const userInfo = new UserInfo(
  document.querySelector(".user-info__name"),
  document.querySelector(".user-info__job"),
  document.querySelector('.user-info__photo'),
  formEdit.elements.nameUser,
  formEdit.elements.jobUser,
  nameValueForm,
  jobValueForm,
  api
);

//userCard
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
userInfo.infoApi();
userInfo.infoEditListener();


editForm.addEventListener('input', validator.setEventListeners);

formEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  userInfo.setUserInfoEdit();
  userInfo.inputInfoApi();
  userInfo.setUserInfoEdit();


});


// Здравствуйте! Можете, пожалуйста, сказать, будет ли доступ к серверу после дедлайна? Хочу доделать доп задания. Или это к куратору?

// Добрый день! Лучше уточнить у куратора, но по идее не должны отобрать.

