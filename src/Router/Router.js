import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import AddExpence from '../Expences/AddExpence';
import EditExpence from '../Expences/EditExpence';
import Help from '../Expences/Help';
import Dashboard from '../Expences/Dashboard';
import NotFoundPage from '../Expences/NotFoundPage';
import MenuHeader from './MenuHeader';
import createExpense from '../Expences/createExpense'


const Router = ()=>(
    <BrowserRouter>
      <div>
        <MenuHeader />
  
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path='/create' component={createExpense} />
          <Route path='/edit/:id' component={EditExpence} />
  
          <Route path='/help' component={Help} />
          <Route  component={NotFoundPage} />
        </Switch>
  
      </div>
    </BrowserRouter>
  )


  export default Router
