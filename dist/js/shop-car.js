"use strict";

// 增加减少按钮选项
var goodsNum = document.querySelector('.goodsNum');
var cut = document.querySelector('.cut');
var add = document.querySelector('.add');

add.onclick = function () {
  goodsNum.value++;

  if (goodsNum.value >= 99) {
    goodsNum.value = 99;
    add.style.cursor = 'not-allowed';
    add.style.color = '#ccc';
  } else {
    cut.style.cursor = 'pointer';
    cut.style.color = '#333';
  }
};

cut.onclick = function () {
  goodsNum.value--;

  if (goodsNum.value <= 0) {
    goodsNum.value = 0;
    cut.style.cursor = 'not-allowed';
    cut.style.color = '#ccc';
  } else {
    add.style.cursor = 'pointer';
    add.style.color = '#333';
  }
};

goodsNum.oninput = function () {
  if (goodsNum.value >= 99) {
    goodsNum.value = 99;
    add.style.cursor = 'not-allowed';
    add.style.color = '#ccc';
  } else {
    add.style.cursor = 'pointer';
    add.style.color = '#333';
  }

  if (goodsNum.value <= 0) {
    goodsNum.value = 0;
    cut.style.cursor = 'not-allowed';
    cut.style.color = '#ccc';
  } else {
    cut.style.cursor = 'pointer';
    cut.style.color = '#333';
  }
};