import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default class Header1 extends React.Component{
            constructor(props){
                super(props);
                this.state={

                }
            }

            render(){
                return(
                    <div>
                            <AppBar position="static">
                                <Toolbar>
                                <IconButton
                                size='large'
                                edge='start'
                                color='default'
                                aria-label='menu'
                                sx={{mr:2}}
                                >
                                <MenuIcon />
                                </IconButton>
                                </Toolbar>
                            </AppBar>
                    </div>
                )
            }
}