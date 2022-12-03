
username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+username;
var firebaseConfig = {
  apiKey: "AIzaSyAqKU1uqVFlXnF89If2TmAZH59pyO9BWCg",
  authDomain: "kwitter-61c42.firebaseapp.com",
  databaseURL: "https://kwitter-61c42-default-rtdb.firebaseio.com",
  projectId: "kwitter-61c42",
  storageBucket: "kwitter-61c42.appspot.com",
  messagingSenderId: "670216738615",
  appId: "1:670216738615:web:b3bcac6b246e5d8f9fecb2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding file"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("trending_rooms_div").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}