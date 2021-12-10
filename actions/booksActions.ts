import axios from "axios";
import booksActionsTypes from "../actions_types/booksActionsTypes";
import { deployApi,localApi } from "../constants/Apis";

export function getBookByIsbn(isbn:string) {
    return async (dispatch:any) => {
        const response = await axios.get(`${deployApi}/api/books/${isbn}`);
        dispatch({
            type: booksActionsTypes.GET_BOOK_BY_ISBN,
            payload: response.data

        })
    }
}