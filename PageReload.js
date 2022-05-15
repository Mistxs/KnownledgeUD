/* Pagereload script for Knowledge Base Usedesk 
version 0.09a

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
  var listofpages = document.querySelector('.container .collection'); // левый список со страницами
  var pagecont = document.querySelector('.container .row').lastElementChild;
  var clone = pagecont.cloneNode(true);  // Создадим копию содержимого из основного блока страницы в память в переменную clone
  pagecont.innerHTML = listofpages.innerHTML;
  listofpages.innerHTML = clone.innerHTML;
  delete clone; // удаляем буфер из памяти

}


// Поменяем логотип

var logo = document.querySelector('.brand-logo');
var logoimg = document.createElement('img');
logoimg.src = "https://www.yclients.com/assets/yclients/2019-template/img/logo.svg";
logo.prepend(logoimg);




// Отладка

console.log ("Уровень страницы - "+level);
