import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        {/* <Router> */}
          <Routes>
            <Route path="/" element={<LandingPage />}/>      
            <Route path="/login" element={<LoginPage />}/>    
            <Route path="/register" element={<RegisterPage />}/>
            {/* <Route exact path="/" element={LandingPage()}/>      
            <Route exact path="/login" element={LoginPage()}/>    
            <Route exact path="/register" element={RegisterPage()}/> */}
          </Routes>
        {/* </Router> */}
          
      </div>
    </Router>
  );
}

export default App
