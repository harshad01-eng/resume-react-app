import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Decrement from './Components/decrement';
import Increment from './Components/Increment';
import Main from "./Main";
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: ['harshad','sagar']
        }
    }
    render(){
        return(<div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/increment" element={<Increment firstName={this.state.name} />} />
                    <Route path="/decrement" element={<Decrement firstName={this.state.name}/>} />
                </Routes>
            </BrowserRouter>
        </div>)
    }
}