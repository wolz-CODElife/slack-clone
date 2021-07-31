import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGB32xhFhSBy8u6B9jgubjfLujVVit6wI",
    authDomain: "wcslack-clone.firebaseapp.com",
    projectId: "wcslack-clone",
    storageBucket: "wcslack-clone.appspot.com",
    messagingSenderId: "614459226245",
    appId: "1:614459226245:web:ce0626635b0e5d682691ec",
    measurementId: "G-XHD3CBXMTH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db