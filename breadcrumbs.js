/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.15a

Build by Mistxs for favourite  YCLIENTS team
*/


// Создание DOM ядра крошек
let parent = document.querySelector('section .container');
let core = document.createElement('div');

core.id = "breadcrumb"


// Парсинг данных со страницы для крошек
var collection = document.querySelector('#nav-mobile li.active').innerHTML;
var category = document.querySelector('div.collection a.active');
var article = document.querySelector('section .row h4').innerHTML;


// Получение адреса страницы и присвоение вложенности будущих крошек
var path = document.location.pathname;
var level = 0;
if (path.includes("article")) {
  level = 3;
  core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li class="first_li">' + collection + '</li> <li class="second_li"> <a href="'+ category.href +'">' + category.innerHTML + '</a></li> <li class="third_li">' + article + ' </li></ul>';
} 
else if (path.includes("category")) {
  level = 2;
  core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li class="first_li">' + collection + '</li> <li> <a href="'+ category.href +'">' + category.innerHTML + '</a></li></ul>';
  // li_end.classList.add("hide");
} 
else if (path.includes("collection")) {
  level = 1;
  core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li>' + collection + '</li></ul>'
  // li_sub.classList.add("hide"); 
  // li_end.classList.add("hide");
}

parent.prepend(core);






// var li_sub = document.querySelector('#breadcrumb .second_li');
// var li_end = document.querySelector('#breadcrumb .third_li');


  console.log ("Уровень = " + level);
  // console.log ("Li_sub = " + li_sub);
  // console.log ("Li_end = " + li_end);





