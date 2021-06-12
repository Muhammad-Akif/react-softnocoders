import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDIT0F4utPmorKsXUSE4_iGFMkY3d7LrqU",
  authDomain: "softnocode.firebaseapp.com",
  databaseURL: "https://softnocode-default-rtdb.firebaseio.com",
  projectId: "softnocode",
  storageBucket: "softnocode.appspot.com",
  messagingSenderId: "134788675276",
  appId: "1:134788675276:web:8db62b355429d500c97469",
  measurementId: "G-R1ZG64VM2E"
};
firebase.initializeApp(firebaseConfig);

export default firebase;