import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Birthday from './birthday'
import * as serviceWorker from './serviceWorker';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faPlus, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import LuckyWinner from './LuckyWinner';
import ShoppingBasket from './ShoppingBasket';


library.add([faPlus, faTrash, faEdit])
ReactDOM.render(
  <React.StrictMode>
  
    {/* <LuckyWinner/>  */}
    <ShoppingBasket />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
