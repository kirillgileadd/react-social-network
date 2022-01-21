import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";

ReactDOM.render(

            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Provider store={store}>
                    <App/>
                    </Provider>
                </BrowserRouter>
            </ThemeProvider>,

    document.getElementById('root')
);

