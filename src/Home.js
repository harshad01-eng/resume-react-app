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
        <div style={{display:'flex'}}>
            <Header1/>
            <ul style={{lineHeight: 0.5}}>
                <li>
                    <p 
                        onClick={()=>this.props.history.push('/resume')} 
                        style={{ color:'white', cursor:'pointer', font:'icon'}}>Resume</p>
                </li>
                <li>
                    <p
                        onClick={()=>this.props.history.push('/contactus')}
                        style={{color:'white', cursor:'pointer', font:'icon'}}> contactUs</p>
                
                </li>
            </ul>
        </div>
    </div>
    
    </div>

)}}