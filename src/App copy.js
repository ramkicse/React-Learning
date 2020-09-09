import React from 'react';
import './App.css';
//import Cakelist from './cakelist'
import Header from './Header';
import Footer from './Footer';
import Products from './products';
import PropTypes from 'prop-types'
import ShoppingBasket from './ShoppingBasket';



function App(props) {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        
        {/* <Products/> */}
        {/* <Counter count='5'/> */}
        <ShoppingBasket />
      </header>
      <Footer/>

    </div>
  );
}

export default App;

App.propTypes = {
  arra : PropTypes.array,
  demo : PropTypes.bool.isRequired
}