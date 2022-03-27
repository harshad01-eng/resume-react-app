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
          <button onClick={()=>this.setState({data:this.state.data + 1})}>+</button>
          <h2>{this.state.data}</h2>
            <h1>Inc</h1>
                <button onClick={ ()=>{this.props.history.push('/dec')}}>Home</button>
        </div>)


    }
}