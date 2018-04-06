import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const style = {
    margin: 12,
};

class Header extends Component{
    render(){
        if(this.props.logged_in){
            return(
                <MuiThemeProvider>
                    <nav>
                        <Link to="/"><RaisedButton label="Home" style={style} /></Link>
                        <Link to="/home"><RaisedButton label="Log Out" style={style}/></Link>
                        <Link to="/profile"><RaisedButton label="Profile" style={style}/></Link>
                    </nav>
                </MuiThemeProvider>
            )
        }
        else{
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
}

Header.propTypes = {  
    actions: PropTypes.object.isRequired,
  }
  
  function mapStateToProps(state, ownProps) {  
    return {logged_in: state.session};
  }

export default Header;