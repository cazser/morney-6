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
const Nav = styled.nav
`
border: 1px solid blue;
>ul{
  display: flex;
  >li{
    width: 33.3%;
    text-align: center;
    padding: 16px;
}
}
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
      <Nav>
        <ul>
          <li>
            <Link to="/tags">标签页</Link>
          </li>
          <li>
            <Link to="/money">记账页</Link>
          </li>
          <li>
            <Link to="/statistics">统计页</Link>
          </li>
        </ul>
        </Nav>
     
      </Wrapper>
    </Router>
  
  );
}

export default App;
