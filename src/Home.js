import React from "react";
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
      <img style={{width: "100%", height:"99vh"}} 
      src={require("./Assets/Images/programming.jpg")}    />
    </div>
)}}