import React,{useState,useEffect} from "react";
import SearchItem from "./searchItem";
import axios from "axios";

function SearchResult(prop){
    const [album,setAlbum]=useState([]);
    let row=[];
    let v=prop.searchValue;
    let cnt=0;

    useEffect(() => {
        axios.get('http://localhost:3000/AlbumSample.json')
            .then((res) => {
                setAlbum(res.data.albumList);
            })
    },[])

    album.forEach((a) => {
        if( a.albumId==v ||
            a.title.indexOf(v)!=-1){
                row.push(
                    <SearchItem key={a.id}
                                id={a.id}
                                albumId={a.albumId}
                                url={'https://picsum.photos/240/160/?image='+a.id} 
                                title={a.title} />
                )
                cnt+=1;
            }
    })

    prop.getCnt(cnt);

    return(
        <>
        {row}
        </>
    )
}

export default SearchResult;