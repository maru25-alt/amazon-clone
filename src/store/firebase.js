import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDWfaFjzxtVddLQK9ybndZy4hlzDw0vweA",
    authDomain: "clone-ab647.firebaseapp.com",
    databaseURL: "https://clone-ab647.firebaseio.com",
    projectId: "clone-ab647",
    storageBucket: "clone-ab647.appspot.com",
    messagingSenderId: "719996904731",
    appId: "1:719996904731:web:0e34d3ac57593b8e1c1fbe"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth}
  export default firebaseApp