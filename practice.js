
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCt0lM4rvYCcIW-zWHlMlurLQbrW-a_qmE",
    authDomain: "kwitter-c1ba4.firebaseapp.com",
    databaseURL: "https://kwitter-c1ba4-default-rtdb.firebaseio.com",
    projectId: "kwitter-c1ba4",
    storageBucket: "kwitter-c1ba4.appspot.com",
    messagingSenderId: "1033229262598",
    appId: "1:1033229262598:web:20d30fbdf1a68fb9e34887",
    measurementId: "G-TM695JFHW1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      user_name=document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
purpose:"adding user"

      });

  }