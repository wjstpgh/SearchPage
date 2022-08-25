import React, {useState} from "react";
import searchIcon from './searchIcon.svg'

function SearchBar(prop){
    const [s,setS]=useState('');

    const handleChange=({target:{value}}) => {
        setS(value);
    }

    const handleSubmit=(event) => {
        event.preventDefault();
        prop.getS(s);
    }

    return(
        <>
        <div className="barContainer">
            <form onSubmit={handleSubmit} className='barForm'>
                <img src={searchIcon}/>
                <input  type='text'
                        className=""
                        placeholder="Album No.  or  Title"
                        onChange={handleChange} />
            </form>
        </div>
        </>
    )
}

export default SearchBar;