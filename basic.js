//For FireStore
import { initializeApp } from "./firestore/firebase-app.js";
//
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//
const firebaseConfig = {
  apiKey: "AIzaSyBajPjgEiSEmGftWPb-BIEJbyAfVS2Y_FE",
  authDomain: "payment-8d349.firebaseapp.com",
  projectId: "payment-8d349",
  storageBucket: "payment-8d349.appspot.com",
  messagingSenderId: "718040561229",
  appId: "1:718040561229:web:d64c90ce0da1fadfe70e04",
};
//
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
} from "./firestore/firebase-firestore.js";
//
let UserName = "Default";
let password = null;
//
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

//Fetch Data From Login page
// Initialize Firebase

// Add event listener to the login button
document.getElementById("login").addEventListener("click", function () {
  document.getElementById("LoginPop").style.display = "none";
  if (document.getElementById("loginaa").innerHTML == "Log In") {
    AddDocument_AutoID();
    document.getElementById("loginaa").innerHTML = "Sign out";
  } else {
    document.getElementById("loginaa").innerHTML = "Log In";
  }
});

// Add Documents
async function AddDocument_AutoID() {
  const UserName = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // alert(UserName + password);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Replace 'state' with the actual value you want to set
  const state = "some_state_value";

  const ref = collection(db, "Data");

  const docRef = await addDoc(ref, {
    Username: UserName,
    PassWord: password,
    state: state,
  });

  //console.log("Document added with ID: ", docRef.id);
}

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal1 = document.getElementById("LoginPop");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

document.getElementById("signup").addEventListener("click", function () {
  if (
    document.getElementById("signpass1").value ==
    document.getElementById("signpass2").value
  ) {
  } else {
    document.getElementsByClassName("error")[1].style.display = "block";
  }
});