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
import Auth from './hoc/auth';

function App() {
  
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  //console.log("-----------------");
  //console.log(NewLandingPage);
  //console.log("-----------------");

  return (
    <Router>
      <div>
          <Routes>
            <Route exact path="/" element={ <NewLandingPage /> }/>         
            <Route exact path="/login" element={<LoginPage />}/>    
            <Route exact path="/register" element={<RegisterPage />}/>
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
