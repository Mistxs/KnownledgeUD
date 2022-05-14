/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/


// Создание DOM ядра крошек
let parent = document.querySelector('section .container');
let core = document.createElement('div');

core.id = "breadcrumb"


parent.prepend(core);


// Получение адреса страницы и присвоение вложенности будущих крошек
var path = document.location.pathname;

var level = 0;

if (path.includes("article")) {
  level = 3;
} else if (path.includes("category")) {
  level = 2;
  var li_sub = document.querySelector('#breadcrumb .second_li');
  var li_end = document.querySelector('#breadcrumb .third_li');
  li_end.classList.add("hide");
  console.log (level);
   console.log ("Li_sub = " + li_sub);

} 
else {level = 1}


// Парсинг данных со страницы для крошек

var collection = document.querySelector('#nav-mobile li.active').innerHTML;
var category = document.querySelector('div.collection a.active');
var article = document.querySelector('section .row h4').innerHTML;

console.log (collection);
console.log (category);
console.log (article);

core.innerHTML = '<ul><li class="first_li">' + collection + '</li> <li class="second_li> <a href="'+ category.href +'">' + category.innerHTML + '</a></li> <li class="third_li">' + article + ' </li></ul>';