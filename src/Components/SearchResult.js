import React, {useState,useEffect,useCallback,useMemo} from "react";
import HrBar from "./HrBar";
import SearchItem from "./SearchItem";
import axios from "axios";


function SearchResult(props){
    const [venue,setVenue]=useState([])
    let row=[];
    let s=props.search_value;
    let cnt=0;

    useEffect(() => {
        axios.get('http://localhost:3000/venueSample.json').then((res) =>{
            setVenue(res.data.venueList);
        })
    },[])

    venue.forEach((v) => {
        if( v.hostName.indexOf(s)!=-1 ||
            v.venueName.indexOf(s)!=-1 ||
            v.address.indexOf(s)!=-1){
                row.push(
                        <SearchItem key={v.id}
                                    type={v.type} 
                                    img={v.imageUrl}
                                    hostName={v.hostName}
                                    venueName={v.venueName}
                                    address={v.address}
                                    pricePerHour={v.pricePerHour}
                                    minHour={v.minHour} />
                    )
                cnt+=1
            }
    })

    return(
        <div className="container">
            <span className="bodySpan">강당/강의실</span><span className="search_cnt">총 {cnt}</span>
            <HrBar />
            {row}
        </div>
    );
}

export default SearchResult;