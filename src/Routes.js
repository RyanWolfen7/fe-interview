import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BillsList from './components/BillsList/BillsList';
import PotentialBillsList from './components/PotentialBillsList/PotentialBillsList';
import Home from './components/Home/Home';

export default () => {
  return (
    <Switch>
      <Route
        component={Home}
        exact
        path={'/'}
      />
      <Route
        component={BillsList}
        exact
        path={'/bills'}
      />
      <Route
        component={PotentialBillsList}
        exact
        path={'/potentialBills'}
      />
    </Switch>
  )
}