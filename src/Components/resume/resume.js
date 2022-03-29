import React from "react";
import Header1 from "../header1";
export default class resume extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){  
        return(
            <div className="app backgraound"> 
            <Header1 history={this.props.history}/>
            <p style={{color:'white',margin:20}}> this is resume</p>
            </div>
        )
    }
}