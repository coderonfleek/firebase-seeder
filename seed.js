const firebase = require("firebase");
require("firebase/firestore");

const users = require("./data");

firebase.initializeApp({
  apiKey: "AIzaSyBPFlcOZ4sE3h2NpmfhtpWByGTN8Jmyb6k",
  authDomain: "my-ionic-app-d2a1d.firebaseapp.com",
  projectId: "my-ionic-app-d2a1d"
});

const db = firebase.firestore();

users.forEach((user) => {
  db.collection("users")
    .add(user)
    .then((docRef) => {
      console.log(`Document written with ID : ${docRef.id}`);
    })
    .catch((error) => {
      console.error(`Error writing document : ${error}`);
    });
});
