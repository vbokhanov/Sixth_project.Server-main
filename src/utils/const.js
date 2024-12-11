/** 
 * @type {{headers: {authorization: string, "Content-Type": string}, serverURL: string}}
 */
export const apiSettings = {
  serverURL: 'https://mesto.nomoreparties.co/v1/frontend-st-cohort-201',
  headers: {
    authorization: '7b817884-01e6-4c64-ac07-2f0fe7169fc1',
    'Content-Type': 'application/json'
  }
};

/**
 * 
 * @param {string} formSelector 
 * @param {string} inputSelector
 * @param {string} submitButtonSelector 
 * @param {string} inactiveButtonClass 
 * @param {string} inputErrorClass 
 * @param {string} errorClass 
 */
/** @type {Object} */
export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
