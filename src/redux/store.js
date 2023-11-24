// import { configureStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterRuducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const store = configureStore({
    reducer: {
        counter: counterRuducer
    }
}, composeWithDevTools)

export default store; 