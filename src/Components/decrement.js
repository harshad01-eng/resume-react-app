import React from "react";
export default class Decrement extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:0,name:"harshad"
        }
    }

    render(){
        return<div className="col">
           <h1>Dec
            </h1> 
            <button onClick={ ()=>{this.props.history.push('/')}}>Home</button>

            </div>
    }
}