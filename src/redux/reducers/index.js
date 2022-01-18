import {combineReducers} from "@reduxjs/toolkit";
import {personalPageReducer} from "./personalPage";
import {usersReducer} from "./users";


const rootReducer = combineReducers({
    personalPage: personalPageReducer,
    users: usersReducer,
})

export default rootReducer