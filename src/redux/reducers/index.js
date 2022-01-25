import {combineReducers} from "@reduxjs/toolkit";
import {personalPageReducer} from "./personalPage";
import {usersReducer} from "./users";
import {authReducer} from "./auth";
import {appReducer} from "./app";


const rootReducer = combineReducers({
    personalPage: personalPageReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer
})

export default rootReducer