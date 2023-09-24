function OpenShop() {
  window.location = "./shop.html";
}
var addtocarts = document.getElementsByClassName("buy-btn-cart");
for (var i = 0; i < addtocarts.length; i++) {
  addtocarts.item(i).addEventListener("click", function (e) {
    //e.preventDefault(); /*use if you want to prevent the original link following action*/
    alert("hohoho");
  });
}
var buynow = document.getElementsByClassName("buy-btn");
for (var i = 0; i < buynow.length; i++) {
  buynow.item(i).addEventListener("click", function (e) {
    //e.preventDefault(); /*use if you want to prevent the original link following action*/
    alert("buynow");
  });
}
