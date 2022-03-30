import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';


import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeIcon from '@mui/icons-material/Home';
import ListItemText from '@mui/material/ListItemText';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { alpha } from '@mui/material';
import { Opacity, TransformSharp } from '@mui/icons-material';
export default class Header1 extends React.Component{

            constructor(props){
                super(props);
                this.state={
                    opendrawer:false,
                }
            }
            render(){
                return(
                    <div>
                         <AppBar position="static" style={{background:"#354A68"}}>
                            <Toolbar>
                            <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }} 
                                    onClick={()=>this.setState({openDrawer:true})}

                                >
                                    <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Harshad Bajare
                            </Typography>
                            <Tooltip title="Download Resume">
                            <Button href={require("../Assets/Images/profile.jpg")}download='harshad.jpg'color="inherit">
                                <DownloadIcon/>Resume

                            </Button>
                            </Tooltip>
                            </Toolbar>
                            </AppBar>
                         
                                <SwipeableDrawer
                                anchor={'left'}
                                open={this.state.openDrawer}
                                onClose={()=>this.setState({openDrawer:false})}
                                onOpen={()=>this.setState({openDrawer:true})}>
                                    <Box sx={{width:200,height:'100%',background:'#354A68',color:'white'}}
                                    role="presentation">
                                        <List>
                                        <ListItem button onClick={()=>this.props.history.push('/')}  >
                                            <HomeIcon/><ListItemText  style={{paddingLeft:20}} primary={'Home'}/>
                                            </ListItem>
                                         <ListItem button onClick={()=>this.props.history.push('/resume')}  >
                                         <SummarizeIcon/><ListItemText  style={{paddingLeft:20}} primary={'Resume'}/>
                                            </ListItem>
                                            <ListItem button onClick={()=>this.props.history.push('/contactus')}  >
                                         <SummarizeIcon/><ListItemText  style={{paddingLeft:20}} primary={'contactus'}/>
                                            </ListItem>
                                        </List>
  

                                    </Box>

                                </SwipeableDrawer>
                    </div>
                )
            }
}

