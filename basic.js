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
for (let i = 0; i < buynow.length; i++) {
  buynow.item(i).addEventListener("click", function (e) {
    //e.preventDefault(); /*use if you want to prevent the original link following action*/
    //alert("hi");
    let Imagesrc = 1;
    if (i <= 15) {
      Imagesrc = document.getElementsByClassName("img-fluid mb-3")[i].src;
      window.location = "./sproduct.html?imgsrc=" + Imagesrc;
    }
  });
}

//Login Page..
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Fetch Data From Login page
document.getElementById("login").addEventListener("click", function (e) {
  let UserName = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  alert(pass);
});
