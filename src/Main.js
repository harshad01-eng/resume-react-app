import React from "react";
import {useLinkClickHandler} from "react-router-dom";
// import {withRouter} from 'react-router-dom'
 class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <button onClick={ ()=>this.props.useLinkClickHandler.push('/increment')}>Increment</button>
            <button>Decrement</button>
        </div>)
    }
}
export default Main