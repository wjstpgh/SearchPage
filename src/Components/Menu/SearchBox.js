import React, { useState } from "react";
import searchIcon from './icn-search-bluegray.svg';

function SearchBox(p){
    const [s,setS]=useState('');

    const handleChange = ({target:{value}}) => {
        setS(value);
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        p.getS(s);
    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <input  type='text' 
                        className="SearchBox_span"
                        placeholder="2,000명 규모의 시험 진행 공간"
                        onChange={handleChange}/>
                <button type="submit" className="SearchBtn"><img src={searchIcon} className="icn-search-bluegray" /></button>
            </form>
            
        </div>
    );
}

export default SearchBox;