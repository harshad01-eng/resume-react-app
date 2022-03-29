import React from "react";
import Header1 from "../header1";
export default class resume extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){  
        return(
            <div className="app backgraound"> 
            <Header1 history={this.props.history}/>
            {objExp.map((response,index)=><div>
            <div style={styles.center}>
                <h2 style={{ marginTop:index==0? 16:-3, textAlign:'center', color:'white',fontFamily:'sans-serif'}}><ins>{response.exp} </ins></h2>
             </div>
                 
                    <div style={styles.center}>
                        <h3 style={{marginTop:-5,color:response.color,fontFamily:'auto'}}>{response.post}</h3>
                    </div>
                    <div style={styles.center}>
                        <h4 style={{marginTop:-15,color:'#9BE716',fontFamily:'none'}}>{response.company}</h4>
                    </div>
                    <div style={styles.center}>
                        <p className="detaislWidth" style={{marginTop:-14,color:'#B0AC8C', textAlign:'center'}}>{response.details}</p>
                    </div>
                    <hr style={{color:'black',marginTop:-10,width:'50%'}}>
                    </hr>
                </div>)}
            </div>
        )
    }
}
const styles={
    center:{display:'flex',
            justifyContent:'center'
            }
}
const objExp =[
    {
        exp:"EXPERIENCE",
        post: "FRONTEND SOFTWARE DEVELOPER",
        company:"InfoEngine Pvt Ltd, Pune",
        color:'#F9A405',
        details:"Experience in designing and developing user interfaces, testing & debugging. Knownledge used React.js, React-native, Rest-API."
    },
    {
        exp:"INTERNSHIP",
        post: "FULL STACK JAVASCRIPT",
        company:"ecoRise Softwares, Pune",
        color:'#F9A405',
        details:"Experience in designing and developing user interfaces, testing & debugging. Able to work independently and within a team. Creating clean, testable, maintainable and functional code is the highest priority. Skills used React.js, MongoDB, nodejs, expressjs, Angular7."
    },
    {
        exp:"EDUCATION",
        post: "BACHELOR'S IN ENGINEERING",
        company:"Sinhgad Insitute. SKNCOE,Pune",
        color:'#F9A405',
        details:'I have completed my graduation in Electronics and Telecommunication engg with CGPA of 8.01. About my project "Real time CAN network system detecting Vehicle engine vibrations and various parameters.", "Develop College Event(Sinhgad Karandak) Management Software."'
    },
]