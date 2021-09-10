import React,{useState} from "react";
import {songsdata} from '../../Data/songsdata.js';
import Songs from "../Songs/songs.js";
import Catfilter from "./catfilter.js";

const Filter = () =>{

    const [songs,setSongs]=useState(songsdata);
    const [cat,setCat]=useState([]);

    const filterSongs = (category) =>{
        if (category === 'all'){
            setSongs(songsdata);
            return;
        }
        if (category === 'trending'){
            const newSongs = songsdata.filter((s)=> s.trending === 'true' );
            setSongs(newSongs);
        }
        if (category === 'new'){
            const newSongs1 = songsdata.filter((s)=> s.new === 'true');
            setSongs(newSongs1);
        }
    }

    return(
        <>
            <Catfilter filterSongs={filterSongs}/>
            <Songs songsdata={songs}/>
        </>
    );
}

export default Filter;