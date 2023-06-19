/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/WidgetCollapse.js
class WidgetCollapse {
  constructor(container) {
    this.container = container;
  }
  openAnimationPage() {
    const collapse = document.createElement('DIV');
    const collapseBtn = document.createElement('BUTTON');
    const collapseBox = document.createElement('DIV');
    const collapseText = document.createElement('P');
    collapse.classList.add('collapse');
    collapse.classList.add('main__item');
    collapseBtn.classList.add('collapse__btn');
    collapseBox.classList.add('collapse__box');
    collapseText.classList.add('collapse__text');
    collapseBtn.textContent = 'Нажми на меня';
    collapseText.textContent = 'Привет';
    this.container.appendChild(collapse);
    collapse.append(collapseBtn);
    collapse.append(collapseBox);
    collapseBox.append(collapseText);
    collapseBtn.addEventListener('click', () => {
      if (!collapseBox.classList.contains('collapse__box--active')) {
        collapseBox.classList.add('collapse__box--active');
        collapseBox.classList.remove('collapse__box--close');
      } else {
        collapseBox.classList.add('collapse__box--close');
        collapseBox.classList.remove('collapse__box--active');
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/WidgetChat.js
class WidgetCallbackChat {
  constructor(container) {
    this.container = container;
  }
  openChat() {
    const chat = document.createElement('DIV');
    const chatForm = document.createElement('FORM');
    const chatTitle = document.createElement('P');
    const chatTextarea = document.createElement('TEXTAREA');
    const chatBtn = document.createElement('BUTTON');
    const chatClose = document.createElement('SPAN');
    chat.classList.add('chat');
    chatForm.classList.add('chat__form');
    chatTitle.classList.add('chat__title');
    chatTextarea.classList.add('chat__textarea');
    chatBtn.classList.add('chat__btn');
    chatClose.classList.add('chat__close');
    chatTitle.textContent = 'Напиши мне';
    chatBtn.textContent = 'Отправить';
    chatClose.textContent = '\u{2716}';
    chatTextarea.spellCheck = 'false';
    this.container.firstChild.appendChild(chat);
    chat.append(chatTitle);
    chat.append(chatForm);
    chat.append(chatClose);
    chatForm.append(chatTextarea);
    chatForm.append(chatBtn);
    chatClose.addEventListener('click', () => {
      chat.classList.add('disapperance');
      document.querySelector('.callback__btn').classList.remove('callback__btn--open');
      document.querySelector('.callback__btn').classList.add('callback__btn--close');
      chat.addEventListener('animationend', () => {
        chat.remove();
      });
    });
  }
  openAnimationPage() {
    const callback = document.createElement('DIV');
    const callbackBtn = document.createElement('DIV');
    callback.classList.add('callback');
    callback.classList.add('main__item');
    callbackBtn.classList.add('callback__btn');
    callbackBtn.textContent = 'Тык';
    this.container.appendChild(callback);
    callback.append(callbackBtn);
    callbackBtn.addEventListener('click', () => {
      if (!document.querySelector('.chat')) {
        this.container.classList.remove('disapperance');
        callbackBtn.classList.remove('callback__btn--close');
        callbackBtn.classList.add('callback__btn--open');
        this.openChat(this.container);
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/img/heart.png
const heart_namespaceObject = __webpack_require__.p + "be0d860e775accf30d67.png";
;// CONCATENATED MODULE: ./src/js/WidgetLiker.js

class WidgetLiker_WidgetCollapse {
  constructor(container) {
    this.container = container;
  }
  openAnimationPage() {
    const liker = document.createElement('DIV');
    const likerBtn = document.createElement('BUTTON');
    liker.classList.add('liker');
    liker.classList.add('main__item');
    likerBtn.classList.add('liker__btn');
    likerBtn.textContent = 'Лайк';
    this.container.appendChild(liker);
    liker.append(likerBtn);
    likerBtn.addEventListener('click', () => {
      const likerHeart = document.createElement('IMG');
      likerHeart.classList.add('liker__heart');
      const randomWay = Math.floor(Math.random() * 4) + 1;
      likerHeart.classList.add(`like-${randomWay}`);
      likerHeart.src = heart_namespaceObject;
      liker.appendChild(likerHeart);
      likerHeart.addEventListener('animationend', () => {
        likerHeart.remove();
      });
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js



const main = document.querySelector('.main');
const container = document.createElement('DIV');
const animationContainer = document.createElement('DIV');
container.classList.add('container');
animationContainer.classList.add('main__inner');
main.appendChild(container);
container.appendChild(animationContainer);
const callbackChat = new WidgetCallbackChat(animationContainer);
const collapse = new WidgetCollapse(animationContainer);
const liker = new WidgetLiker_WidgetCollapse(animationContainer);
callbackChat.openAnimationPage();
collapse.openAnimationPage();
liker.openAnimationPage();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;