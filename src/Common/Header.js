import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';

//drawer
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openDrawer:false,
        }
    }
    render(){
        return(<div>
              <AppBar position="static" style={{background:'#650041'}}>
              <Toolbar>
              <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={()=>this.setState({openDrawer: true})}
                >
                    <MenuIcon />
              </IconButton>
              <Typography  style={{color:'ActiveBorder'}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Harshad Bajare
              </Typography>
              <Tooltip title="Download Resume">
              <Button 
                color="inherit" 
                download="harshad-bajare-resume.pdf" 
                href={require('../Assets/Documents/resume.pdf')}>
                  <DownloadIcon/>
              </Button>
              </Tooltip>
              </Toolbar>
              </AppBar>

              {/* Drawer Code */}
              <SwipeableDrawer
                anchor={"left"}
                open={this.state.openDrawer}
                onClose={()=>this.setState({openDrawer: false})}
                onOpen={()=>this.setState({openDrawer: true})}>
                  
                  <Box
                    sx={{ width: 250, height: "100%", background:'#650041', color:'white' }}
                    role="presentation"
                    onClick={()=>this.setState({openDrawer: false})}
                    onKeyDown={()=>this.setState({openDrawer: true})}
                    >
                    <List>
                        <ListItem button onClick={()=>this.props.history.push('/')}>
                            <HomeIcon/> <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button onClick={()=>this.props.history.push('/resume')}>
                            <SummarizeIcon/> <ListItemText primary={"Resume"} />
                        </ListItem>
                    </List>
                    </Box>

                </SwipeableDrawer>
        </div>)
    }
}