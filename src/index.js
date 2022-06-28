import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC9_YBvlKWSxSkAFROguvGyzKKbMIadBiA",
  authDomain: "admiral-spb.firebaseapp.com",
  projectId: "admiral-spb",
  storageBucket: "admiral-spb.appspot.com",
  messagingSenderId: "151543634097",
  appId: "1:151543634097:web:d6b4209df8b6edada02a90",
  measurementId: "G-LMFRTDK30G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

