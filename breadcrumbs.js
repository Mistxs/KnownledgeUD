/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/


// Создание DOM ядра крошек
let parent = document.querySelector('section .container');
let core = document.createElement('div');

core.id = "breadcrumbs"
core.innerHTML = '<ul><li><a href="https://secure.usedesk.ru/settings/support">База знаний</a></li><li class="active">Тест БЗ</li></ul>';


parent.prepend(core);


// Получение адреса страницы
var path = document.location.pathname;
console.log (path)

var typeofpath = "article";
var level = 0;

if path includes(typeofpath) {
  console.log ("Содержит");
  level = 3;
}

// console.log (parent)
// console.log (core)