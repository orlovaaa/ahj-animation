export default class WidgetCollapse {
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
