import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { BrowserRouter, Routes, Route } from "react-router";
import Datapage from './Pages/Data-page/Data-page.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

// two routes: default - main App, /data to show the json data

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/> 
    <Route path="/data" element={<Datapage/>} />
  </Routes>
</BrowserRouter>
);