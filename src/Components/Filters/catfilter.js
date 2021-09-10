import react from "react";


const Catfilter=({filterSongs})=>{
    return(
        <>
        <div className="container">
        <button type="button" style={{marginRight:'16px', border:'None',padding:'10px'}} className="btn btn-light btn-sm" onClick={() =>
        filterSongs('all')}>
            All</button>
        <button type="button" style={{marginRight:'16px', border:'None',padding:'10px'}} className="btn btn-light btn-sm" onClick={() =>
        filterSongs('trending')}>
            Trending</button>
        <button type="button" style={{marginRight:'16px', border:'None',padding:'10px'}} className="btn btn-light btn-sm" onClick={() =>
        filterSongs('new')}>
            New Release</button>

        </div>
        </>
    );
}

export default Catfilter;