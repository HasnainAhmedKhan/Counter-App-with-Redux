import { createStore, combineReducers } from 'redux';
import countReducer from './reducers/countReducer';

const rootReducer = combineReducers({
    count: countReducer,
});

export const store = createStore(rootReducer)