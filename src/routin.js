import React from "react";
import home from "./Home";
import resume from "./Components/resume/resume";
import contactus from "./Components/contactus/contactus";
import { Switch,BrowserRouter,Route } from "react-router-dom";
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
                <Route exact path="/resume"component={resume}/>
                <Route exact path="/contactus"component={contactus}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}