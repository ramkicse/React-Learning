import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import {Provider} from 'react-redux'

import Router from './Router/Router';

import configureStore from './store/configureStore'

import {addExpense, editExpence, removeExpence} from './actions/expences'
import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from './actions/filters'

import getVisibleExpenses from './selectors/expences'

import {AdminInfo, AuthenticationInfo, Info, withAdminWarning, requireAuthentication} from './hoc'

library.add([faPlus, faTrash, faEdit])




const store  = configureStore();
// const today= new Date();
// const gasDate =  today. - 5); 
// const ebDate =  new Date(today.getDate() - 1); 
// const waterDate =  new Date(today.getDate() - 10); 
// console.log(gasDate.getMilliseconds())

store.dispatch(addExpense({desc:'Water bill', amount:500, createAt: new Date("September 10, 2020 00:00 PM").getTime()}))
store.dispatch(addExpense({desc:'Gas bill', amount:800, createAt: new Date("September 1, 2020 00:00 PM").getTime()}))
store.dispatch(addExpense({desc:'Elecrcity bill', amount:2500, createAt: new Date("September 5, 2020 00:00 PM").getTime()}))
store.dispatch(addExpense({desc:'Mobile bill', amount:1500, createAt: new Date("September 7, 2020 00:00 PM").getTime()}))

const state = store.getState();
const visibleExpences = getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpences)



ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  // <AuthenticationInfo isAuthenticated={true} info="aut info"/>,
  //<AdminInfo isAdmin={true} info="These is Admin info"/>,
  // <Expence></Expence>,

  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>

//     <LuckyWinner />
//     {/* <ShoppingBasket /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
