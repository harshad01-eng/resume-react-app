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
      <img style={{width: "100%", height:"99vh", position:'absolute'}} 
      src={require("./Assets/Images/programming.jpg")}    />
      <h1 onClick={()=>this.props.history.push('/increment')} style={{position:'relative', color:'white', cursor:'pointer'}}>Sagar</h1>
    </div>
)}}