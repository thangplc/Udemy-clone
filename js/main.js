// Chay khi cac code html, js da load xong
window.addEventListener("load", function () {
  truncateCardTitle();
});
function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; ++i) {
    var text = cardList[i].innerHTML;
    var newText = truncateString(text, 35);
    cardList[i].innerHTML = newText;
  }
}

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

/* Sidebar toggle */
var toggleBtn = document.querySelector(".sidebar-mini__button");
var sidebarMini = document.querySelector(".sidebar-mini");
var switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
  sidebarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark-mode");
});
