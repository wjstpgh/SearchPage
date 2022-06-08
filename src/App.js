import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import SearchResult from './Components/SearchResult';

function App() {
  const [searchValue,setsearchValue]=useState('');

  function getS(s){
    setsearchValue(s);
  }
  
  return (
    <div className="_test">
      <Navbar getS={getS}/>
      <SearchResult search_value={searchValue}/>
    </div>
  );
}

export default App;
