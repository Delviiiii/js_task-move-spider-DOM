'use strict';

const spider = document.querySelector('img.spider');
let centerOfSpiderTop = spider.offsetHeight / 2;
let centerOfSpiderLeft = spider.offsetWidth / 2;

document.querySelector('body div.wall').addEventListener('click', (e) => {
  const wall = e.currentTarget;

  const startX = wall.offsetLeft + wall.clientLeft;
  const endX = wall.offsetLeft + wall.clientLeft + wall.clientWidth;
  const rangeX = [startX, endX];

  const startY = wall.offsetTop + wall.clientTop;
  const endY = wall.offsetTop + wall.clientTop + wall.clientHeight;
  const rangeY = [startY, endY];

  const coordOfClickX = () => {
    return e.clientX - centerOfSpiderLeft - rangeX[0] + 'px';
  };

  const coordOfClickY = () => {
    return e.clientY - centerOfSpiderTop - rangeY[0] + 'px';
  };

  // Moving spider
  if (coordOfClickX() <= rangeX[0]) {
    spider.style.left = rangeX[0];
  } else {
    spider.style.left = coordOfClickX();
  }

  if (coordOfClickY() <= rangeY[0]) {
    spider.style.top = rangeY[0];
  } else {
    spider.style.top = coordOfClickY();
  }
});
