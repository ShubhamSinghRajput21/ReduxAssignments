import {createStore, applyMiddleware} from 'redux';
import homeReducer from '../modules/home';
import thunk from 'redux-thunk';

const store = createStore(homeReducer, applyMiddleware(thunk));

export default store;
