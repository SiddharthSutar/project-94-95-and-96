var firebaseConfig = {
    apiKey: "AIzaSyB812dU2m0Mbww8ysnQ_4QZ0xlgZ5VMvNU",
    authDomain: "kwitter-app-90b51.firebaseapp.com",
    databaseURL: "https://kwitter-app-90b51-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-90b51",
    storageBucket: "kwitter-app-90b51.appspot.com",
    messagingSenderId: "787831830710",
    appId: "1:787831830710:web:a2bbd82ad5ca1ecc528e17"
  };
  
firebase.initializeApp(firebaseConfig);
function login() {
    user_name=document.getElementById("username_inp").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}