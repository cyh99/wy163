"use strict";

// 轮播图1
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
}); // 轮播图2

var mySwiper2 = new Swiper('.swiper2', {
  loop: true,
  // 如果需要前进后退按钮
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  // 如果需要分页器
  pagination: '.swiper-pagination',
  paginationClickable: true
}); // 左侧导航

var aside = document.querySelector('.aside-left');
var li = document.querySelectorAll('.aside-left li');

window.onscroll = function () {
  console.log(window.scrollY); // 控制导航栏的定位

  if (window.scrollY > 605) {
    aside.style.position = 'fixed';
  } else {
    aside.style.position = 'absolute';
  } // if(window.scrollY < 605) {
  //     aside.style.position = 'absolute'
  // }
  // 控制导航栏的颜色


  if (window.scrollY < 1142) {
    li[1].className = 'current';
    li[2].className = '';
  } else if (window.scrollY >= 1142 && window.scrollY < 1882) {
    li[1].className = '';
    li[2].className = 'current';
    li[3].className = '';
  } else if (window.scrollY >= 1882 && window.scrollY < 2505) {
    li[2].className = '';
    li[3].className = 'current';
    li[4].className = '';
  } else if (window.scrollY >= 2505 && window.scrollY < 3313) {
    li[3].className = '';
    li[4].className = 'current';
    li[5].className = '';
  } else if (window.scrollY >= 3313 && window.scrollY < 4413) {
    li[4].className = '';
    li[5].className = 'current';
    li[6].className = '';
  } else if (window.scrollY >= 4413 && window.scrollY < 4906) {
    li[5].className = '';
    li[6].className = 'current';
    li[7].className = '';
  } else if (window.scrollY >= 4906 && window.scrollY < 5706) {
    li[6].className = '';
    li[7].className = 'current';
    li[8].className = '';
  } else if (window.scrollY >= 5706 && window.scrollY < 6506) {
    li[7].className = '';
    li[8].className = 'current';
    li[9].className = '';
  } else if (window.scrollY >= 6506 && window.scrollY < 7285) {
    li[8].className = '';
    li[9].className = 'current';
    li[10].className = '';
  } else if (window.scrollY >= 7285) {
    li[9].className = '';
    li[10].className = 'current';
  }
};