import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TierDetail from './TierDetail';
import AddTier from './AddTier';
import DeletTier from './DeletTier';
import UpdateTier from './UpdateTier';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tiere/:id" element={<TierDetail />}></Route>
        <Route path="/tiere" element={<AddTier />}></Route>
        <Route path="/tierdelete/:id" element={<DeletTier />}></Route>
        <Route path="/tier-update/:id" element={<UpdateTier />}></Route>
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
