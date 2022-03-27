import React from "react";
import Header from "./Common/Header";
// import imgBg from './Assets/Images/programBg.jpg';
export default class home extends React.Component{
    constructor(props){
    super(props);
    this.setState={
        name:'',
        data:null
    }
}


render(){
return(
    <div className="App backgraoundImg">
        <Header history={this.props.history}/> {/*replace block of code from header component*/}
    </div>
    )}
}