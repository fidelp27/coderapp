import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartProvider from "./context/CartProvider"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSMxQ6PbwkUMx90KL19bbifFGK8UehXdU",
  authDomain: "coderapp-768f6.firebaseapp.com",
  projectId: "coderapp-768f6",
  storageBucket: "coderapp-768f6.appspot.com",
  messagingSenderId: "314932130330",
  appId: "1:314932130330:web:7dcb75c3f80f280331d7a3",
  measurementId: "G-LZ9ZNP652S"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
