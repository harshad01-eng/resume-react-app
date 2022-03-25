import React from "react";
export default class Decrement extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:0,name:""
        }
    }

    render(){
        return<div className="col">
           <h1>{this.props.firstName[1]}
            </h1> 
           {this.props.firstName.map((res)=>(
               res
           ))
           }

            </div>
    }
}