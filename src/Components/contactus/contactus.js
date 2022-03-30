import React from 'react'
import Header1 from '../header1';
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
            <p>hii</p>

            </div>
        )
    }
}
