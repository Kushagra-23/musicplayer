const Player = (props) => {

    return (
        <>
          <nav class="navbar fixed-bottom navbar-light bg-light">
          <div class="container-fluid">
          <audio controls={true} autoplay={true} >
          <source src={props.songDetail.source}></source>
          </audio>
          {/* {JSON.stringify(props.songDetail)} */}
          </div>
          </nav>
        </>
    );
}

export default Player;