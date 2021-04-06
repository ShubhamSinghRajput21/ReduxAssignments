import {createStore, applyMiddleware} from 'redux';
import homeReducer from '../modules/Home';
import thunk from 'redux-thunk';

const store = createStore(homeReducer, applyMiddleware(thunk));

export default store;
