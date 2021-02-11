import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import {withRouter, Switch, Route} from 'react-router-dom'
import NotFound from "./containers/NotFound";
import AddSkiClub from "./containers/AddSkiClub/AddSkiClub";
import AddAthlete from "./containers/AddAthlete/AddAthlete"
import ContextMenu from "./components/ContextMenu";
import AddVenue from "./containers/AddVenue/AddVenue";


class App extends Component {


    render() {

        const routes = (
            <Switch>
                <Route path="/addVenue" component={AddVenue}/>
                <Route path="/addSkiClub" component={AddSkiClub}/>
                <Route path="/addAthlete" component={AddAthlete}/>
                <Route path="/" exact/>
                <Route component={NotFound}/>
            </Switch>
        )


        return (
            <Layout>
                {routes}
            </Layout>
        )
    }
}

export default withRouter(App);
