import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';


export const rootReducer = combineReducers({

    book: booksReducer

});