import firebase from 'firebase'
import Rebase from 're-base'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBu_x-TZe-BBPldJjhreTQBiG_EXrce_u0",
  authDomain: "webreact-78d86.firebaseapp.com",
  databaseURL: "https://webreact-78d86.firebaseio.com",
  projectId: "webreact-78d86",
  storageBucket: "webreact-78d86.appspot.com",
  messagingSenderId: "331087267067"
  
};
firebase.initializeApp(config);

const auth = firebase.auth()

export { auth }