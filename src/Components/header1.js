import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
export default class Header1 extends React.Component{
<<<<<<< Updated upstream
            constructor(props){
                super(props);
                this.state={
                    opendrawer:false,
=======
    constructor(props){
        super(props);
        this.state={
>>>>>>> Stashed changes

        }
    }
    render(){

<<<<<<< Updated upstream
            render(){
                return(
                    <div>
                            <AppBar position="static">
                                <Toolbar>
                                <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2}}
                               onClick={()=>this.setState({opendrawer:true})}
                                >
                                <MenuIcon />
                                <Typography style={{color:'ActiveBorder'}}variant="h6"component="div" sx={{flexgrow: 1}}>
                                    Harshad Bajare
                                </Typography>
                                </IconButton>
                                </Toolbar>
                            </AppBar>
                    </div>
                )
            }
}
=======
return (
    <div>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}
>>>>>>> Stashed changes
