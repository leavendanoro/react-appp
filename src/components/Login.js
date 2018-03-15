import React, { Component } from 'react';
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
    render(){
        return(
            <div className="login-body">
            <h1>Log in</h1>
            <MuiThemeProvider  muiTheme={muiTheme}>
                <form>
                    <TextField
                    hintText="your_email@gmail.com"
                    floatingLabelText="User Email"
                    /><br />
                    <TextField
                    hintText="your password"
                    floatingLabelText="Password"
                    type="password"
                    /><br />
                    <RaisedButton label="Submit" style={style} />
                </form>
            </MuiThemeProvider>
            </div>
        )
    }
}

export default Login;