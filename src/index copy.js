import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Birthday from './birthday'
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import Router from './Router/Router';
import { createStore } from 'redux'
import Expence from './redux-expences';


library.add([faPlus, faTrash, faEdit])

const Person = {
  name: 'Ramki',
  age: 35,
  location: {
    city: 'Pune',
    temp: 38.5

  }
}

const { name: firstName = "Anonymous", age } = Person

console.log(`${firstName} is ${age} years old`)

const { city, temp: temerature } = Person.location
console.log(`${city} temp is  ${temerature} cel`)

const address = ['1299 s Jupiter Street', 'Philadelphia', 'Pennsylvania', 19147]
const [street, city1, state, zip] = address;

console.log(`street name ${street}`)
console.log("city name ", city1)
console.log("state name ", state)
console.log("pincode name ", zip)

const incrementCount = ({ incrementBy = 1 } = {}) => (
  {
    type: 'INCREMENT',
    incrementBy
  })

const decrementCount = ({ decrementBy = 1 } = {}) => (
  {
    type: 'DECREMENT',
    decrementBy
  })

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET' 
})

const store = createStore(
  (
    state =
      {
        application_name: "Expense Tracker",
        count: 0
      },
    action
  ) => {
    switch (action.type) {
      case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
        return {
          count: state.count + incrementBy
        };
      case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1

        return {
          count: state.count - decrementBy
        };
      case 'RESET':
        return {
          count: 0
        };
      case 'SET':
        return {
          count: action.count
        };
      default:
        return state
    }
  }
)


const unsubsribe = store.subscribe(() => {
  console.log("subsribe : ", store.getState())
})


store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount({ decrementBy: 10 }))
store.dispatch(setCount({count:-100}))


console.log("sep******************")
store.dispatch({
  type: 'RSET', count: 100
})

console.log("Original State ", store.getState())

store.dispatch({
  type: 'INCREMENT', incrementBy: 5
})
store.dispatch({
  type: 'INCREMENT'
})
console.log("After 2 Increment State ", store.getState())

store.dispatch({
  type: 'DECREMENT'
})

console.log("After Decrement State ", store.getState())
store.dispatch({
  type: 'RESET'
})

console.log("After RESET State ", store.getState())

store.dispatch({
  type: 'SET', count: 100
})

console.log("After  SET State ", store.getState())


ReactDOM.render(
  <Router></Router>,
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
