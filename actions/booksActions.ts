import axios from "axios";
import booksActionsTypes from "../actions_types/booksActionsTypes";
import api from "../constants/Apis";

export function getBookByIsbn(isbn:string) {
    return async (dispatch:any) => {
        const response = await axios.get(`${api}/api/books/${isbn}`);
        dispatch({
            type: booksActionsTypes.GET_BOOK_BY_ISBN,
            payload: response.data

        })
    }
}