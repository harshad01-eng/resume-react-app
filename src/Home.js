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
    <div>
    <div className="App backgraoundImg">
        <Header history={this.props.history}/> {/*replace block of code from header component*/}
        <div style={{display:'flex'}}>
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