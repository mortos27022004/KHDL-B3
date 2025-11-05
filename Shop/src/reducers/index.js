import { cartReducer } from "./cart";
import {combineReducers} from 'redux';
export const allReducer = combineReducers(
    {
        cartReducer
    }
)