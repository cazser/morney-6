import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
Switch,
  Route,
  Link,
Redirect }
from 'react-router-dom'
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
      <div>
      <nav>
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
        </nav>
        </div>
      <Switch>
       
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
        <Redirect exact from="/" to="/money" />
      </Switch>
    </Router>
  
  );
}

export default App;
