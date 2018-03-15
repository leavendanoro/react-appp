import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    margin: 12,
};

class Header extends Component{
    render(){
        return(
            <MuiThemeProvider>
                <nav>
                    <Link to="/"><RaisedButton label="Home" style={style} /></Link>
                    <Link to="/login"><RaisedButton label="Login" style={style}/></Link>
                    <Link to="/register"><RaisedButton label="Register" style={style}/></Link>
                </nav>
            </MuiThemeProvider>
        )
    }
}

export default Header;