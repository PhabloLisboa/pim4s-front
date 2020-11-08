import { combineReducers } from "redux";
import Auth from "./authReducer";
import Dialog from "./dialogReducer";
import Error from "./errorReducer";
import Client from "./clientReducer";

const reducer = () => combineReducers({ Auth, Dialog, Error, Client });

export default reducer;
