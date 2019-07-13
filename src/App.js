import React from 'react';
import './App.css';
import MerchantCard from './components/MerchantCard';
import ServiceCard from './components/ServiceCard';
import TokenCard from './components/TokenCard';
import CategoryCard from './components/CategoryCard';
import RelatedToken from './components/RelatedToken';
import AccountDetail from './components/AccountDetail';
import SidebarItem from './components/SidebarItem';

import { BrowserRouter as Router, Route } from "react-router-dom";




// Pages Import
import LoginPage from "../src/pages/Login"
import RegisterComponent  from "../src/pages/Register"
import {TokensPage} from "../src/pages/Tokens"
import CreateToken from './components/CreateToken';
import MainPage from "../src/pages/MainPage"



function App() {
  return (
    <div className="App">

      <Router>
          <Route path="/"/>
          <Route path="/login"   component={LoginPage}/>
          <Route path="/register"  component={RegisterComponent}/>
          <Route path="/token"  component={TokensPage}/>
          <Route path="/tokens/create" component={CreateToken} />
          <Route path="/mainpage" component={MainPage} />

      </Router>
      
    </div>
  );
}

export default App;
