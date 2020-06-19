import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
    return (
        <div className='App'>
            <Switch>
                <PrivateRoute exact path='/colors' component={BubblePage} />
                <Route exact path='/' component={Login} />
            </Switch>
        </div>
    );
}

export default App;
