import React from 'react';
import './App.css';
import {Hamburger, TotalPrice,Message} from "./components";


function App() {
  return (
      <div>
        <Hamburger />
        <TotalPrice />
        <Message/>
      </div>
  );
}

export default App;
