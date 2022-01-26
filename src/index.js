import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from "react-router-dom"; // HashRouter for gitHub pages
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </ThemeProvider>,
    document.getElementById('root')
);

