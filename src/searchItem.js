import React from "react";

function SearchItem(){
    return(
        <>
        <div className="bg-items">
            <div className="items" >
                <img src='https://picsum.photos/240/160/?image=21'></img>
                <div className="l"></div>
                <div className="ll"></div>
                <div className="lll"></div>
                <div className="lV"></div>
                <div className="details">
                    <h3>#1</h3>
                    <p>this is a description for your photo in your gallery.</p>
                    <h6>Album &amp; page</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchItem;