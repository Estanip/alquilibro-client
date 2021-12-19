import { IBook } from '../interfaces/bookInterfaces';
import booksActionsTypes from '../actions_types/booksActionsTypes';

const initialState: IBook = {
    uploadBook: {
        title: "",
        author: "",
        editorial: "",
        category: "",
        language: ""
    }
};

export const booksReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case booksActionsTypes.GET_BOOK_BY_ISBN:
            return {
                ...state,
                uploadBook: action.payload
            };
        default:
            return state;
    }
}