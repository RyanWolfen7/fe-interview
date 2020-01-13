import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';
import App from './components/App/App';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
    padding: 0;
    background: #F6F7FA
	}
`;

const routes = (
  <Provider store={store}>
    <Router>
      <GlobalStyle/>
      <App>
        <Routes />
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));

