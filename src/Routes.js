import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BillsList from './components/BillsList/BillsList';

export default () => {
  return (
    <Switch>
      <Route
        exact
        path={'/'}
      />
      <Route
        component={BillsList}
        exact
        path={'/bills'}
      />
    </Switch>
  )
}