import React from "react";
import HomeLogo from "./HomeLogo";
import Menu from "./Menu/Menu";
import SearchBox from "./Menu/SearchBox";

function Navbar(p){
    
    function getS(s){
        const ss=s;
        p.getS(ss);
    }
    return(
        <div className="navbar">
            <Menu />
            <HomeLogo />
            <SearchBox getS={getS}/>
        </div>
    );
}

export default Navbar;