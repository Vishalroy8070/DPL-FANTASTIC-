
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById("message").textContent = "Signup successful!";
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
}
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      window.location.href = "team.html"; // redirect to team builder
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
}
