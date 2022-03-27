import React from "react";
import Header from "../../Common/Header";
export default class resume extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="app"> 
                <Header history={this.props.history}/>
                <p>harshad</p>
            </div>
        )
    }
}