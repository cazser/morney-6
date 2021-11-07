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
import Layout from './components/Layout'


function Tags(){
  return(
    <Layout>
    <div>标签页</div>
    </Layout>
  )
}

function Money(){
  return(
    <Layout>
    <div>记账页</div>
    </Layout>
  )
}

function Statistics(){
  return(
  <Layout>
    <div>统计页</div>
    </Layout>
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
  
  );
}

export default App;
