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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("input_text").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("input_text").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
