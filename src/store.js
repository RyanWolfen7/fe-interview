import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});


export default createStore(reducers, compose(applyMiddleware(thunk, axiosMiddleware(client))))