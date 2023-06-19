export default class WidgetCallbackChat {
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
