import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import '../styles/Register.css';

const style = {
    margin: 12,
};


class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {value: 1};
    }
    handleChange = (event, index, value) => this.setState({value});
    render(){
        return(
            <div className="register-body">
            <h2>Register</h2>
            <MuiThemeProvider>
                <form>
                    <TextField
                    hintText="your name"
                    floatingLabelText="User Name"
                    /><br />
                    <TextField
                    hintText="your lastname"
                    floatingLabelText="User Lastname"
                    /><br />
                    <SelectField value={this.state.value}
                                 onChange={this.handleChange}
                                 hintText="I'm a:">
                        <MenuItem value={1} primaryText="Regular User" />
                        <MenuItem value={2} primaryText="Trainer" />
                        <MenuItem value={3} primaryText="GYM manager" />
                    </SelectField><br/><br /><br/><br />
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

export default Register;