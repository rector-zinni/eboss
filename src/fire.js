// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2nyArSUR4lhihZvSofH7bp2IjSdOYg2M",
  authDomain: "emmanuelwedding-31dd6.firebaseapp.com",
  projectId: "emmanuelwedding-31dd6",
  storageBucket: "emmanuelwedding-31dd6.appspot.com",
  messagingSenderId: "628401428951",
  appId: "1:628401428951:web:09beef3ebe304ddee59392",
  measurementId: "G-B6ZWBJET8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service


export {storage};