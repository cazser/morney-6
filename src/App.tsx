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
import Nav from './components/Nav.jsx'

const Wrapper = styled.div
`
height: 100vh;
display:flex;
flex-direction: column;
`;

const Main = styled.div
`flex-grow:1;
overflow:auto;
`

function Tags(){
  return(
    <div>标签页</div>
  )
}

function Money(){
  return(
    <div>记账页</div>
  )
}

function Statistics(){
  return(
    <div>统计页</div>
  )
}

function NoMatch(){
  return(
    <div>404</div>
  )
}
function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
      </Main>
      <Nav /> 
      </Wrapper>
    </Router>
  
  );
}

export default App;
