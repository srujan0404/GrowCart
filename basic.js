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
  DocumentSnapshot,
} from "./firestore/firebase-firestore.js";
//
let UserName = "Default";
let password = null;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
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
  if (document.getElementById("loginaa").innerHTML == "Log In") {
    //AddDocument_AutoID();
    GETADocument(document.getElementById("username").value).then((val) => {
      //alert(val);
      //document.getElementById("LoginPop").style.display = "none";
      if (val == document.getElementById("password").value) {
        document.getElementById("loginaa").innerHTML = "Sign out";
        document.getElementById("LoginPop").style.display = "none";
        document.getElementById("snackbar").innerHTML = "Login SuccessFull!!";
        myFunction();
      } else if (val == "NO") {
        document.getElementsByClassName("error")[0].style.display = "block";
        document.getElementsByClassName("error")[0].innerHTML =
          "Incorrect UserName ..Kindly Register From Below";
      } else {
        document.getElementsByClassName("error")[0].style.display = "block";
        document.getElementsByClassName("error")[0].innerHTML =
          "Incorrect Password!!";
      }
    });
  } else {
    document.getElementById("loginaa").innerHTML = "Log In";
  }
});

// Add Documents
async function AddDocument_AutoID(UserName, password) {
  // alert(UserName + password)

  // Replace 'state' with the actual value you want to set
  const state = "some_state_value";

  const ref = collection(db, "Data");

  const docRef = await addDoc(ref, {
    username: UserName,
    password: password,
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

modal = document.getElementById("LoginPop");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("signup").addEventListener("click", function () {
  if (
    document.getElementById("signpass1").value ==
      document.getElementById("signpass2").value &&
    document.getElementById("signpass2").value != ""
  ) {
    document.getElementById("id01").style.display = "none";
    AddDocument_CustomID(
      document.getElementById("usersign").value,
      document.getElementById("signpass1").value
    );
  } else {
    document.getElementsByClassName("error")[1].style.display = "block";
  }
});

async function AddDocument_CustomID(UserName, password) {
  // alert(UserName + password);

  // Replace 'state' with the actual value you want to set
  const state = "some_state_value";

  const ref = doc(db, "Data", UserName);

  const docRef = await setDoc(ref, {
    username: UserName,
    password: password,
    state: state,
  });

  //console.log("Document added with ID: ", docRef.id);
}
async function GETADocument(UserName) {
  // alert(UserName + password);

  // Replace 'state' with the actual value you want to set
  const state = "some_state_value";

  const ref = doc(db, "Data", UserName);

  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return docSnap.data().password;
  } else {
    return "NO";
  }

  //console.log("Document added with ID: ", docRef.id);
}

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}