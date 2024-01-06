import React from 'react';
import ReactDOM from 'react-dom/client';
//import Footer from "./components/Footer.js";
import ScrollToTop from "./ScrollToTop.js";
import ShareOwnershipScheme from './pages/ShareOwnershipScheme.js';
//import Recommendations from "./Recommendations"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css'
import './vanilla.css'
import Home from './pages/Home.js';
import ContactUs from './pages/ContactUs.js';
import Payments from './pages/Payments.js';
import { FAQs } from './pages/FAQs.js';
import Lifestyle from './pages/Lifestyle.js';
import WynkForMerchants from './pages/WynkForMerchants.js';
import Rides from './pages/Rides.js';
import CaptainDashboard from './pages/CaptainDashboard.js';
import WynkTermsAndConditions from './pages/WynkTermsAndConditions.js';
//import(/* webpackPreload: true */ './fonts/stylesheet.css');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ScrollToTop/>
    <Routes>
        <Route path='/' exact element={< Home/>} />
        <Route path='/payments' exact element={< Payments/>} />
        <Route path='/lifestyle' exact element={< Lifestyle/>} />
        <Route path='/wynk-for-merchants' exact element={< WynkForMerchants/>} />
        <Route path='/rides' exact element={< Rides/>} />
        <Route path='/FAQs' exact element={< FAQs/>} />
        <Route path='/contact-us' exact element={< ContactUs/>} />
        <Route path='/share-ownership' exact element={< ShareOwnershipScheme/>} />
        <Route path='/captain-dashboard' exact element={< CaptainDashboard/>} />
        <Route path='/wynk-terms-and-conditions' exact element={< WynkTermsAndConditions/>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
