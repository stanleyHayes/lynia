import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";




// Pages Import
import LoginPage from "../src/pages/Login"
import RegisterComponent  from "../src/pages/Register"



function App() {
  return (
    <div className="App">
      <Router>
          <Route path="/"   />
          <Route path="/login"   component={LoginPage}/>
          <Route path="/register"  component={RegisterComponent}/>
      </Router>
      
    </div>
  );
}

export default App;
