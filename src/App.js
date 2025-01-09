import './App.css'
import MainForm from './Components/Main-form/Main-form.js';
import Topbar from './Components/Top-bar/Top-bar.js';
import { initializeApp } from "firebase/app";
import { ToastContainer } from 'react-toastify';


//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGG39C1X1WHHQzX2GILJK0ERz73r5DY8E",
  authDomain: "vehicle-app-12e77.firebaseapp.com",
  projectId: "vehicle-app-12e77",
  storageBucket: "vehicle-app-12e77.firebasestorage.app",
  messagingSenderId: "329438402848",
  appId: "1:329438402848:web:f542c878c9a921541edf45"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/**
* App funtion
* topbar - top bar that contains title, profile, language & metric
* ToastContainer - to show toasts anywhere in the App
* mainForm - contains optimization form and report form
* @returns {HTML} 
*/ 
function App() {
  return (
    <div className='white-box'>
      <Topbar/>
      <ToastContainer />
      <MainForm/>
    </div>
  );
}

export default App;
