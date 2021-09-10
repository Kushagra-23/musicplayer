import react, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Player from "../Player/Player";

const SongPage = () => {

    const history = useHistory();
    const [songDetails, setsongDetails] = useState({});

   useEffect(()=>{
    if(!history.location.songDetails || Object.keys(history.location.songDetails).length === 0 ){
        history.push("/");
    }
    else{
    setsongDetails(history.location.songDetails);
    }
    },[])

    return (
        <>
        <div className="container-fluid">
            <Link to={{pathname:"/"}} >
            <button type="button" className="btn btn-dark">Go Back</button>
            </Link>
            <div className="row">
                {songDetails && Object.keys(songDetails).length >= 0 &&
                <div className="conatiner">
                <div className="row">
                    <h2>{songDetails.name}</h2>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                    <img src={songDetails.cover} className="img-thumbnail" style={{height:'300px', width:'350px'}} alt="Image"/>
                    </div>
                    <div class="col-sm-8">
                    <h4>{songDetails.artist}</h4>
                    <hr/>
                    <p><em>{songDetails.description}</em></p>
                    </div>
                    </div>
                </div>
                }
            </div>
            <Player songDetail={songDetails}/>
        </div>
        </>
    );
}

export default SongPage;