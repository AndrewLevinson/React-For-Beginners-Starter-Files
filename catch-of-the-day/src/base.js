import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAJptZv5yw758S6ba2mgBS0uqHl99pltRM",
  authDomain: "catch-of-the-day-a-levinson.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-a-levinson.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
