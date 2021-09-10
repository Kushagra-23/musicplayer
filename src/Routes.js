import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import SongPage from "./Components/SongPage/SongPage";

const Routes = () => {

    return(
        <>
        <Router>        
            <Switch>
                <Route path="/" component={Landing} exact={true}  />
                <Route path="/songpage" component={SongPage} exact={true}  />
            </Switch>
        </Router>
        </>
    );
}

export default Routes;