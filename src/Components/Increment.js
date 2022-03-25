import React from "react";
export default class Increment extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:0,name:''
        }
    }

    render(){
       return (<div className="center">
            <h1><button onClick={()=>this.setState ({data:this.state.data + 1})}>+ </button>{(this.state.data)}{((this.state.data)>5)?this.props.firstName[0]:this.props.firstName[1]}<button onClick={()=>this.setState ({data:this.state.data - 1})}>-</button></h1>
            
        </div>)


    }
}