/* Pagereload script for Knowledge Base Usedesk 
version 0.01a

Build by Mistxs for favourite  YCLIENTS team
*/


var path = document.location.pathname;
var level = 0;
if (path.includes("article")) {
  level = 3;
  // core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li class="first_li">' + collection + '</li> <li class="second_li"> <a href="'+ category.href +'">' + category.innerHTML + '</a></li> <li class="third_li">' + article + ' </li></ul>';
} 
else if (path.includes("category")) {
  level = 2;
  // core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li class="first_li">' + collection + '</li> <li>' + category.innerHTML + '</li></ul>';
} 
else if (path.includes("collection")) {
  level = 1;
  var listofpages = document.querySelector('.container .collection');
  console.log (listofpages);
  var pagecont = document.querySelector('.container .row').lastElementChild;
  console.log (pagecont);
  var buffer = pagecont; // записываем в буфер все что внутри pagecont
  console.log (buffer);
  pagecont.innerHTML = listofpages.innerHTML; // меняем содержимое страницы на список статей
  console.log (pagecont);
  console.log (listofpages);
  listofpages.innerHTML = buffer.innerHTML; // переписыаем список страниц на популярные статьи
  console.log (listofpages);
  // delete buffer; // удаляем буфер из памяти

  
  // core.innerHTML = '<ul><li> <a href="/"> Главная </a> </li> <li>' + collection + '</li></ul>'
}





// Отладка

console.log ("Уровень страницы - "+level);
console.log (listofpages);
console.log (pagecont);