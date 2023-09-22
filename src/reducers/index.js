import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';

const rootReducer= combineReducers({
    counter:counterReducer,
    itemsRed:itemReducer,
    userReducer:userReducer

})

export default rootReducer;