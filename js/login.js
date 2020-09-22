firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      window.location.href = "edit_page.html";
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });

}

function logout(){
  firebase.auth().signOut();
  window.location.href = "index.html";
}

function add(){
  const address = document.getElementById('address');
  const latitude = document.getElementById('latitude');
  const longitude = document.getElementById('longitude');
  const name = document.getElementById('name');
  const navigation = document.getElementById('navigation');
  const image = document.getElementById('image');

  const database = firebase.database();

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    exports.setCount = functions.database.ref('/user/{userId}').onWrite(event => {
      return event.data.ref.parent.once("value", (snapshot) => {
        const count = snapshot.numChildren();
        return event.data.ref.update({ count });
      });
  })
    database.ref('/playground/' + count.value+1).set({
      Address: address.value,
      Lat: latitude.value,
      Lng: longitude.value,
      Name: name.value,
      Nav: navigation.value,
      Pic: image
    });
  });
}
