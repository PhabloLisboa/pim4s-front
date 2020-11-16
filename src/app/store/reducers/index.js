import { combineReducers } from "redux";
import Auth from "./authReducer";
import Dialog from "./dialogReducer";
import Error from "./errorReducer";
import Client from "./clientReducer";
import Cripto from "./CriptoReducer";

const reducer = () => combineReducers({ Auth, Dialog, Error, Client, Cripto });

export default reducer;
