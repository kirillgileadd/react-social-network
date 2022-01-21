import {combineReducers} from "@reduxjs/toolkit";
import {personalPageReducer} from "./personalPage";
import {usersReducer} from "./users";
import {authReducer} from "./auth";


const rootReducer = combineReducers({
    personalPage: personalPageReducer,
    users: usersReducer,
    auth: authReducer
})

export default rootReducer