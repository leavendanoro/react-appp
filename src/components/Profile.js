import React, { Component } from 'react';
import '../styles/Profile.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    };

const muiTheme = getMuiTheme({
    textField: {
        height: 50,
        rigth: 0,
    },
});
     

class Profile extends Component{
    render(){
        return(
            <main>
                <div className="ProfileBody">
                    <h1>PROFILE</h1>
                    <div className="first">
                        <div className="tableP">
                            <table className = "tablePadding">
                                    <tr>
                                        <th>Mis rutinas</th>
                                        <th>Estado de progreso</th>
                                        <th>Calorias quemadas</th>
                                    </tr>
                                    <tr>
                                        <td>Pecho</td>
                                        <td>40</td>
                                        <td>1200</td>
                                    </tr>
                                    <tr>
                                        <td>Abdomen</td>
                                        <td>38</td>
                                        <td>2500</td>
                                    </tr>
                                    <tr>
                                        <td>Piernas</td>
                                        <td>41</td>
                                        <td>3120</td>
                                    </tr>
                            </table>
                            <MuiThemeProvider muiTheme={muiTheme}>
                                <RaisedButton className="button" label="Descargar Rutina" style={style} /> 
                                <RaisedButton className="button" label="Crear Rutina" style={style} /> 
                            </MuiThemeProvider> 
                        </div>
                        <div className="tableP"> 
                            <table className = "tablePadding">
                                    <tr>
                                        <th>Mis Dietas</th>
                                        <th>Cantidad Calorias</th>
                                    </tr>
                                    <tr>
                                        <td>Hipocalorica</td>
                                        <td>1150</td>
                                    </tr>
                                    <tr>
                                        <td>Vegetariana</td>
                                        <td>2500</td>
                                    </tr>
                            </table>
                            <MuiThemeProvider muiTheme={muiTheme}>
                                <RaisedButton className="button" label="Descargar Dieta" style={style} /> 
                                <RaisedButton className="button" label="Crear Dieta" style={style} /> 
                            </MuiThemeProvider> 
                        </div>
                        <div className="postbuttons">
                        <MuiThemeProvider muiTheme={muiTheme}>
                                <RaisedButton className="button" label="Ver mis post" style={style} /> 
                                <RaisedButton className="button" label="Crear Post" style={style} /> 
                        </MuiThemeProvider> 
                        </div>
                    </div>
                    <div className="second ">
                        <div>
                            <img src="http://via.placeholder.com/140x100" alt="placeholder"/>
                            <div>
                                <p>John Doe</p>
                                <p>Rating: 4,5</p>
                            </div>
                        </div>
                        <div align="justify">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>    
                        </div>
                        <div>
                            <h4 align="left">Progreso de hoy</h4>
                            <progress max="100" value="80"></progress>
                        </div>   
                        <div>
                            <h4 align="left">Logros obtenidos</h4>
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                        </div> 
                    </div>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <RaisedButton className="closesession" label="Cerrar Sesion" style={style} /> 
                    </MuiThemeProvider> 
                </div>
            </main>
        )
    }
}

export default Profile;