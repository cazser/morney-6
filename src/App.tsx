import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
let Button =styled.button 
`color: red`
function App() {
  return (
    <div className="App">
     <div>
      <Button>你好</Button>
     </div>
    </div>
  );
}

export default App;
