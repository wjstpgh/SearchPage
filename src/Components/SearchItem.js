import React from "react";
import HrBar from "./HrBar";

function SearchItem(p){
    let type='';
    let badgeType='';

    if(p.type==='realtime'){
        type='실시간';
        badgeType='itemBadge_dark';
    }
    else if(p.type==='approval'){
        type='승인';
        badgeType='itemBadge_light';
    }

    return(
        <>
        <div className="searchItemBox">
            <img src={p.img} className="searchItemImg"></img>
            <div className="itemName">
                <span className="itemTitle">{p.hostName}/{p.venueName}</span>
                <div className={badgeType}>
                    {type}
                </div>
                <span className="itemAdr">{p.address}</span>
            </div>
            <div className="itemPriceBox">   
                <span className="itemPrice">
                    {(p.minHour * p.pricePerHour).toLocaleString('ko-KR')} 원
                    <span className="text-style-2">/ {p.minHour}시간</span>
                </span>
                <span className="pricePerHour">(시간당 {p.pricePerHour}원)</span>
            </div>
        </div>
        <HrBar />
        </>
    );
}

export default SearchItem;