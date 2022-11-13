import {createStore, combineReducers} from 'redux';

import inputReducer from '../redusers/inputReducer';

const store = createStore(combineReducers({inputReducer}), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;