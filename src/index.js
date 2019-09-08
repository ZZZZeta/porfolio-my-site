import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './utils/global';
import theme from './utils/theme';

ReactDOM.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <>
                <App/>
                <GlobalStyles/>
            </>
        </ThemeProvider>
    </HashRouter>
     
    , document.querySelector('#root'));