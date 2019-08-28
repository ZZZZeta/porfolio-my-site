import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './utils/global';
import theme from './utils/theme';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <>
                <App/>
                <GlobalStyles/>
            </>
        </BrowserRouter>
    </ThemeProvider>
     
    , document.querySelector('#root'));