import WidgetCollapse from './WidgetCollapse';
import WidgetCallbackChat from './WidgetChat';
import WidgetLiker from './WidgetLiker';

const main = document.querySelector('.main');
const container = document.createElement('DIV');
const animationContainer = document.createElement('DIV');

container.classList.add('container');
animationContainer.classList.add('main__inner');

main.appendChild(container);
container.appendChild(animationContainer);

const callbackChat = new WidgetCallbackChat(animationContainer);
const collapse = new WidgetCollapse(animationContainer);
const liker = new WidgetLiker(animationContainer);

callbackChat.openAnimationPage();
collapse.openAnimationPage();
liker.openAnimationPage();
