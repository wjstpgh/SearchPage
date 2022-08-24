import React, {useState} from "react";
import SearchBar from "./searchBar";
import SearchResult from "./searchResult";
import logo from './galleryLogo.png';

function App(){
    const [Value,setV]=useState('');

    function getS(s){
        setV(s);
    }

    return(
        <div className="container">
            <img src={logo} className='logo'></img>
            <SearchBar getS={getS} />
            <SearchResult searchValue={Value} />
        </div>
    );
}

export default App;