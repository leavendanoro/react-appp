import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux';  
import * as sessionActions from '../actions/sessionActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/Login.css';


const style = {
    margin: 12,
};
const muiTheme = getMuiTheme({
    textField: {
      height: 50,
      rigth: 0,
    },
});

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {credentials: {email: '', password: ''}}
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }
    
    onSave(event) {
        event.preventDefault();
        this.props.actions.logInUser(this.state.credentials);
    }

    render(){
        return(
            <div className="login-body">
            <h1>Log in</h1>
            <MuiThemeProvider  muiTheme={muiTheme}>
                <form>
                    <TextField
                    hintText="your_email@gmail.com"
                    floatingLabelText="User Email"
                    value = {this.state.credentials.email}
                    onChange={this.onChange}
                    /><br />
                    <TextField
                    hintText="your password"
                    floatingLabelText="Password"
                    type="password"
                    value={this.state.credentials.password}
                    onChange={this.onChange}
                    /><br />
                    <RaisedButton label="Submit" style={style} 
                    onClick={this.onSave}/>
                </form>
            </MuiThemeProvider>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}

export default connect (null, mapDispatchToProps)(Login);