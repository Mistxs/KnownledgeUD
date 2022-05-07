/* Breadcrumbs script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/



let parent = document.querySelector('section .container');
let core = document.createElement('div');

core.id = "breadcrumbs"
core.innerHTML = '<ul><li><a href="https://secure.usedesk.ru/settings/support">База знаний</a></li><li class="active">Тест БЗ</li></ul>';


parent.prepend(core);


console.log (parent)
console.log (core)