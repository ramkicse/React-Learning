import React from 'react';
import './App.css';
import Cakelist from './cakelist'
import Header from './Header';
import Footer from './Footer';
import Products from './products';



function App(props) {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        
        <Products/>
      </header>
      <Footer/>

    </div>
  );
}

export default App;
