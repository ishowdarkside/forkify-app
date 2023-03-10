import View from './View.js';
import icons from 'url:../../img/icons.svg';
class addRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was succesfully uploaded';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener(
      'click',
      function (e) {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
      }.bind(this)
    );
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener(
      'click',
      function (e) {
        this._overlay.classList.add('hidden');
        this._window.classList.add('hidden');
      }.bind(this)
    );
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArray = [...new FormData(this)];
      const data = Object.fromEntries(dataArray);
      handler(data);
    });
  }
  _generateMarkup() {}
}

export default new addRecipeView();
