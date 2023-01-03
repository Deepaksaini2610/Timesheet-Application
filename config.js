// const firebaseConfig = {
//   apiKey: "AIzaSyDB70Elc8SpCmd4iSXVwD24kwzvr4tVmxY",
//   authDomain: "timesheet-bc659.firebaseapp.com",
//   projectId: "timesheet-bc659",
//   storageBucket: "timesheet-bc659.appspot.com",
//   messagingSenderId: "164860602415",
//   appId: "1:164860602415:web:ee145650d5815f40193eda",
// };

// // Initialize Firebase
// let app;
// if(firebase.apps.length === 0){
// app = firebase.initializeApp(firebaseConfig);
// }else{
//     app = firebase.app();
// }
// const auth = firebase.auth();
// // const db = getFirestore(app);
// export {auth};





import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFkVlSimzgx2GMOnAY1B-1PWHoTEQYrgU",
  authDomain: "latesttimesheet.firebaseapp.com",
  projectId: "latesttimesheet",
  storageBucket: "latesttimesheet.appspot.com",
  messagingSenderId: "634841174153",
  appId: "1:634841174153:web:f2662c3546027f4530f658",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth()
export { firebase ,auth};