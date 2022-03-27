import React from "react";
import home from "./home";
import Increment from "./Components/Increment";
import { Switch,BrowserRouter,Route } from "react-router-dom";
import reactRouterDom from "react-router-dom";
export default class routin extends React.Component{
    constructor(props){
        super(props);
        this.state={
        data:""
        }
    }

    render(){
        return(
            <div> 
                <BrowserRouter>
                <Switch>
                <Route exact path="/"component={home}/>
                <Route exact path="/increment"component={Increment}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}