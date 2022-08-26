import React, {useState} from "react";
import SearchBar from "./searchBar";
import SearchResult from "./searchResult";
import logo from './galleryLogo.png';

function App(){
    const [Value,setV]=useState('');
    const [cnt,setCnt]=useState('');

    function getS(s){
        setV(s);
    }

    function getCnt(c){
        setCnt(c);
    }

    return(
        <div className="container">
            <img src={logo} className='logo'></img>
            <SearchBar getS={getS} cnt={cnt} />
            <SearchResult searchValue={Value} getCnt={getCnt} />
        </div>
    );
}

export default App;