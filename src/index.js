import React from 'react';
import ReactDOM from 'react-dom/client';
//import Footer from "./components/Footer.js";
import ScrollToTop from "./ScrollToTop.js";
import TheScheme from "./pages/TheScheme.js";
//import Recommendations from "./Recommendations"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css'
import Home from './pages/Home.js';
import ContactUs from './pages/ContactUs.js';
import Payments from './pages/Payments.js';
import { FAQs } from './pages/FAQs.js';
import Lifestyle from './pages/Lifestyle.js';
//import(/* webpackPreload: true */ './fonts/stylesheet.css');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop/>
    <Routes>
        <Route path='/' exact element={< Home/>} />
        <Route path='/payments' exact element={< Payments/>} />
        <Route path='/lifestyle' exact element={< Lifestyle/>} />
        <Route path='/FAQs' exact element={< FAQs/>} />
        <Route path='/contact-us' exact element={< ContactUs/>} />
        <Route path='/share-ownership' exact element={< TheScheme/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
