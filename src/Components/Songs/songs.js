import React from "react";
import { Link } from "react-router-dom";
import classes from './songs.css';

const Songs = ({songsdata}) =>{

    return(
        <>
        <div className='row'>
         {songsdata.map((songs) => {
            return(
                    <div className="col-md-3">
                    <div className="card" style={{borderStyle:'groove',padding:'18px',borderRadius:'15px 50px 30px 5px'}}>
                    <img src={songs.cover} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h6 className="card-title text-center">{songs.name}</h6>
                    <p className="card-text text-center">{songs.artist}</p>
                    <Link to={{pathname: "/songpage",songDetails: songs}}>
                    <button type="button" className="btn btn-dark d-grid gap-2 col-6 mx-auto" >
                    Play</button> 
                    </Link>
                    </div>
                    </div>
                    </div>
                   );
                })}
        </div>
        </>
    );
}

export default Songs;