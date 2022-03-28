import React from "react";
import Header1 from "./Components/header1";
// import imgBg from './Assets/Images/programBg.jpg';
import Avatar from '@mui/material/Avatar';
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
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'8%',}}>
                
                <Avatar sx={{ width: 150, height:150}} alt="Remy Sharp" src={require("./Assets/Images/profile.jpg")} />
              
                   
          
            </div>
            <div  style={{display:'flex', justifyContent:'center', alignContent:'center', color:'white'}}>
                <p style={{fontSize:34, fontWeight:'bold', marginTop:'auto'}}>Software Developer</p>
            </div>
            
    </div>   
    
    </div>

)}}