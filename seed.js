const firebase = require("firebase");
require("firebase/firestore");

const users = require("./data");

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID"
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
