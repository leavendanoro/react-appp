import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/Home.css';

class Home extends Component{
    render(){
        return(
            <div className="HomeBody">
            <MuiThemeProvider>
                <h1>Welcome to UNHealthy</h1>
            </MuiThemeProvider>
            </div>
        )
    }
}

export default Home;