/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/

let parent = document.querySelector('.container');
let before = document.querySelector('.row');
let core = document.createElement('div');

core.id = "breadcrumbs"
core.innerHTML = '<ul><li><a href="https://secure.usedesk.ru/settings/support">База знаний</a></li><li class="active">Тест БЗ</li></ul>';

document.insertBefore(core, before);

console.log (parent)
console.log (before)
console.log (core)