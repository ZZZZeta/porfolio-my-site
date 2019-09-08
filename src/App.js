import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

const AppWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #ebebe3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

class App extends Component {
    
    render() { 
        return ( 
            <Switch>
                <AppWrapper>
                    <Navbar/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About} />
                    <Route path='/portfolio' component={Portfolio} />
                </AppWrapper>
            </Switch>
         );
    }
}
 
export default App;