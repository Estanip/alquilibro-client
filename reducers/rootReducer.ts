import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { booksReducer } from './booksReducer';


export const rootReducer = combineReducers({

    book: booksReducer,
    auth: authentication

});