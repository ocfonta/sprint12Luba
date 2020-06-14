


class FormValidator {
    constructor() {
 this.checkInputValidity = this.checkInputValidity.bind(this);
 this.setSubmitButtonState = this.setSubmitButtonState.bind(this);
    }
    checkInputValidity(element) {
        const errorMessage = element.target.nextElementSibling;
        const value = element.target.value;
        const valueLength = value.length;
      
       errorStatus = element.target.checkValidity();
      
        if(errorStatus === false && valueLength === 0 ) {
      
          errorMessage.textContent = 'Это обязательное поле';
          popupEditButton.setAttribute('disabled', '');
          event.target.classList.add('input__error-message__true');
      
        } else if (!errorStatus) {
      
          errorMessage.textContent = 'Должно быть от 2 до 30 символов';
          popupEditButton.setAttribute('disabled', '');
          event.target.classList.add('input__error-message__true');
      
       
        } else {
          errorMessage.textContent = '';
          event.target.classList.remove('input__error-message__true');
        }
      
    }
    setSubmitButtonState() {
        if(document.querySelector('.input__error-message__true') !== null) {
            document.querySelector('.popup__edit-button').setAttribute('disabled', '');
          }
          else {
            document.querySelector('.popup__edit-button').removeAttribute('disabled'); 
          }

    }
    setEventListeners(event) {
      
        validator.checkInputValidity(event);
        validator.setSubmitButtonState();
    }
}


