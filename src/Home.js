import React from "react";
import Header1 from "./Components/header1";
// import imgBg from './Assets/Images/programBg.jpg';
export default class home extends React.Component{
    constructor(props){
    super(props);this.setState={
        name:'',data:null
    }
}


render(){
return(
    <div>
    <div className="App backgraoundImg">
            <Header1/>

    </div>   
    
    </div>

)}}