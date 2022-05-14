/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/


// Создание DOM ядра крошек
let parent = document.querySelector('section .container');
let core = document.createElement('div');

core.id = "breadcrumbs"


parent.prepend(core);


// Получение адреса страницы и присвоение вложенности будущих крошек
var path = document.location.pathname;

var level = 0;

if (path.includes("article")) {
  level = 3;
} else if (path.includes("category")) {level = 2} 
else {level = 1}


// Парсинг данных со страницы для крошек

var collection = document.querySelector('#nav-mobile li.active').innerHTML;
var category = document.querySelector('div.collection a.active').innerHTML;;
var article = "null";

console.log (collection);
console.log (category);

core.innerHTML = '<ul><li>' + collection + '</li><li class="active">Тест БЗ</li></ul>';