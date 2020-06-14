class Popup {
constructor() {

this.eventListeners = this.eventListeners(this);
}
toggleNewPopup() {
    document.forms.new.reset();
    document.querySelector('.popup').classList.toggle('popup_is-opened');
}
toggleEditPopup() {

const editPoppup = document.querySelector('#popup-edit');
editPoppup.classList.toggle('popup_is-opened');
document.forms.edit.reset();

}
eventListeners() {
document.querySelector('.user-info__button').addEventListener('click', this.toggleNewPopup);
document.querySelector('.popup__close').addEventListener('click', this.toggleNewPopup);
document.querySelector('.user-info__edit-button').addEventListener('click', this.toggleEditPopup);
document.querySelector('#popup__close-edit').addEventListener('click', this.toggleEditPopup);
}
} 