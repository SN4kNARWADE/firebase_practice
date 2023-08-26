//----- New Registration code start
document.getElementById("register").addEventListener("click", function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var date_of_birth = document.getElementById("date_of_birth").value;
  var mobile_no = document.getElementById("mobile_no").value;
  var education = document.getElementById("education").value;
  var college_name = document.getElementById("college_name").value;

  //For new registration
  createUserWithEmailAndPassword(
    auth,
    email,
    password,
    name,
    confirm_password,
    date_of_birth,
    mobile_no,
    education,
    college_name
  )
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(userCredential.user.uid);

      try {
        //save to users collection
        const response = await setDoc(
          doc(db, "users", userCredential.user.uid),
          {
            email: userCredential.user.email,
            password: document.getElementById("password").value,
            name: document.getElementById("name").value,
            confirm_password: document.getElementById("confirm_password").value,
            date_of_birth: document.getElementById("date_of_birth").value,
            mobile_no: document.getElementById("mobile_no").value,
            education: document.getElementById("education").value,
            college_name: document.getElementById("college_name").value,
          }
        );
        console.log(response);
      } catch (err) {
        console.log("error: " + err);
      } finally {
        alert("Registration successfully!!");
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
      alert(error);
    });
});
//----- End

//----- Login code start
// document.getElementById("login").addEventListener("click", function() {
// 	var email =  document.getElementById("login_email").value;
// 	var password = document.getElementById("login_password").value;

// 	signInWithEmailAndPassword(auth, email, password)
// 	.then((userCredential) => {
// 	  // Signed in
// 	  const user = userCredential.user;
// 	  console.log(userCredential);
// 	  alert(user.email+" Login successfully!!!");
// 	  document.getElementById('logout').style.display = 'block';
// 	  // ...
// 	})
// 	.catch((error) => {
// 	  const errorCode = error.code;
// 	  const errorMessage = error.message;
// 	  console.log(errorMessage);
// 	  alert(errorMessage);
// 	});
// });
//----- End

//----- Logout code start
// document.getElementById("logout").addEventListener("click", function() {
// 	signOut(auth).then(() => {
// 		// Sign-out successful.
// 		console.log('Sign-out successful.');
// 		alert('Sign-out successful.');
// 		document.getElementById('logout').style.display = 'none';
// 	  }).catch((error) => {
// 		// An error happened.
// 		console.log('An error happened.');
// 	  });
// });
//----- End
