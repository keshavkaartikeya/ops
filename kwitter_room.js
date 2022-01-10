const firebaseConfig = {
      apiKey: "AIzaSyDcM0t_8aFkMVMm6_iyVTUlL4LuEBsNeMA",
      authDomain: "real-73f84.firebaseapp.com",
      databaseURL: "https://real-73f84-default-rtdb.firebaseio.com",
      projectId: "real-73f84",
      storageBucket: "real-73f84.appspot.com",
      messagingSenderId: "56800873584",
      appId: "1:56800873584:web:455cc15edffc9f391738b5"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="whatsapp_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="whatsapp_page.html";
}