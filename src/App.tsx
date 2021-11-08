import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import {
 HashRouter as Router,
Switch,
  Route,
  Link,
Redirect }
from 'react-router-dom'
import Statistics from 'views/Statistics';
import Money from 'views/Money';
import Tags from 'views/Tags';
import NoMatch from 'views/NoMatch';

const AppWrapper = styled.div`
color: #333;
`;
function App() {
  return (
  <AppWrapper>
  <Router>
       <Switch>
        <Redirect exact from="/" to="/money" />
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
          </Route>
      </Switch>
      
    </Router>
</AppWrapper>  
  );
}

export default App;
