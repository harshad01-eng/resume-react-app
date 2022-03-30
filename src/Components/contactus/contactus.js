import React from 'react'
import Header1 from '../header1';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default class contactus extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    }
    render(){
        return(
            <div className="backgraound"> 
            <Header1 history={this.props.history}/>
            <div style={obj.center}>
            <h5 style={{paddingTop:50,color:'#DBB822',fontFamily:'sans-serif',fontSize:24,fontWeight:'inherit'}}>HIRE OR CONTACT ME...</h5>
            </div>
            <div style={obj.center }>
                <p style={{marginTop:-10,width:'70%',textAlign:'center',color:'aquamarine'}}>I’m always up to discuss new projects or have a good old chat about your business.
                    Let’s see if we can create something great!</p>
            </div>
            <div style={obj.center}> 
            <Box className='detaislWidth'
                sx={{
                    height: "auto",
                    backgroundColor: 'transparent',
                
                }}
                >
                    <div style={{margin:20, display:'flex', justifyContent:'space-between'}}>
                        <IconButton onClick={()=>window.open('tel:7385949126')}>
                            <PhoneIcon style={{color:'#54cccc',fontSize:40,}}/>
                        </IconButton>
                    
                        <IconButton onClick={()=>window.open('mailto: harshadbajare123@gmail.com')}>
                            <EmailIcon style={{color:'#df7474',fontSize:40}}/>
                        </IconButton>

                        <IconButton onClick={()=>window.open("https://www.instagram.com/harshad.bajare/")}>
                            <InstagramIcon style={{color:'#da16d9',fontSize:40}}/>
                        </IconButton>
                        
                        <IconButton onClick={()=>window.open("https://www.facebook.com/harshad.bajare")}>
                            <FacebookIcon style={{color:'#4381cb',fontSize:40}}/>
                        </IconButton>
                        <IconButton onClick={()=>window.open("https://www.linkedin.com/in/harshad-bajare-b949501b9/")} >
                            <LinkedInIcon style={{color:'#2a2aae',fontSize:40}}/>
                        </IconButton>
                    </div>

                </Box>
            </div>
            </div>
        )
    }
}

const obj={
    center:{display:'flex',
    justifyContent:'center',
    alignContent:'center',},

}
