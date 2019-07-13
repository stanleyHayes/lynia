import React from 'react';
import './App.css';
import MerchantCard from './components/MerchantCard';
import ServiceCard from './components/ServiceCard';
import TokenCard from './components/TokenCard';
import CategoryCard from './components/CategoryCard';
import RelatedToken from './components/RelatedToken';
import AccountDetail from './components/AccountDetail';
import SidebarItem from './components/SidebarItem';

function App() {
  return (
    <div className="App">
      <RelatedToken />
    </div>
  );
}

export default App;
