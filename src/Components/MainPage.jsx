import React, { Component } from 'react';
import MessageField from './MessageField';
import Profile from './Profile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export class MainPage extends Component {



    render() {

        return (
            <Router>
                <div>
                    <Link to="/">home</Link>
                    <Link to="/chat0">msg0</Link>
                    <Link to="/chat1">msg1</Link>
                    <Link to="/profile">profile</Link>
                    <Switch>
                        <Route path="/chat0"> <MessageField diagID="0" /></Route>
                        <Route path="/chat1"> <MessageField diagID="1" /></Route>
                        <Route path="/profile"> <Profile /></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default MainPage
