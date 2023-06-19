import heartImg from '../img/heart.png';

export default class WidgetCollapse {
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
      likerHeart.src = heartImg;

      liker.appendChild(likerHeart);

      likerHeart.addEventListener('animationend', () => {
        likerHeart.remove();
      });
    });
  }
}
