import React from "react";

function SearchItem(p){
    const page=p.id-((p.albumId-1)*50);

    return(
        <>
        <div className="bg-items">
            <div className="items" >
                <img src={p.url} alt=' Cannot Get Picture'></img>
                <div className="l"></div>
                <div className="ll"></div>
                <div className="lll"></div>
                <div className="lV"></div>
                <div className="details">
                    <h3>#{p.id}</h3>
                    <p>{p.title}</p>
                    <h6>Album{p.albumId}:{page}</h6>
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchItem;