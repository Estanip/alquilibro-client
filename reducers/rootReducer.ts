import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { booksReducer } from './booksReducer';
import alert  from './alertReducer'


export const rootReducer = combineReducers({

    book: booksReducer,
    auth: authentication,
    alert: alert

});