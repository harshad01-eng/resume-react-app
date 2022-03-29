import React from "react";
import Header1 from "./Components/header1";
// import imgBg from './Assets/Images/programBg.jpg';
import Avatar from '@mui/material/Avatar';
import { fontFamily } from "@mui/system";
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
            <Header1 history={this.props.history}/>
            <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginTop:'8%',}}>
                
                <Avatar sx={{ width: 150, height:150}} alt="Remy Sharp" src={require("./Assets/Images/profile.jpg")} />
              
                   
          
            </div>
            <div style={styles.center}>
                
                <marquee className='marqee' direction="left" height="50px"behavior='alternate' scrollamount="4">
                    <p style={{fontSize:34 ,fontWeight:'bold', marginTop:'auto',color:'#AFD20A'}}>Software Developer</p>
                </marquee>
            </div>
            <div style={styles.about} >
            <p style={{textAlign:'center',fontSize:25,marginTop:'10',fontWeight:'normal',fontFamily:'serif', color:'#CFD00A'}}>
                <ins>About me:</ins></p>
            </div>
            <div style={styles.about} >
            <p style={{ textAlign:'center',fontSize:15, fontWeight:'normal', color:'#79F0EB', width:"80%",marginTop:-20,fontFamily:'auto'}}>
            Experienced Full Stack Engineer with a demonstrated history of working in the information technology and services industry. 
            Skilled in Spring Boot, Oracle Database, React.js, R-Native and Flutter. Strong engineering professional with a Bachelor of 
            Engineering - BE focused in ECE from STES.</p>
            </div>
            
    </div> 
    
    </div>  


)}}
const styles ={
    center:{
            display:'flex', 
            justifyContent:'center', 
            alignContent:'center', 
            color:'white'
        },
        about:{
            display:'flex', 
            justifyContent:'center', 
            alignContent:'center'
        }
}