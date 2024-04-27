// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv73sycnHQKRWMF3YfbLX2WWhZg66vQHI",
  authDomain: "plata-42222.firebaseapp.com",
  projectId: "plata-42222",
  storageBucket: "plata-42222.appspot.com",
  messagingSenderId: "380391624147",
  appId: "1:380391624147:web:d53f8ef47db175d7e3f326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// try {
//   console.log('Firebase app initialized successfully');
// } catch (error) {
//   console.error('Firebase initialization error:', error.message);
// }
const auth = getAuth(app);

export { auth };