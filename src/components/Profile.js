import React, { Component } from 'react';
import '../styles/Profile.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const API = 'https://unhealthy-back.herokuapp.com/normal_users/2';

const style = {
    margin: 12,
    };

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            user_profile:{},
            user_routines:[],
            user_fav: [],
            avatar: 'http://via.placeholder.com/140x100',
            archiv: [],
        }
    }
    request(){
        fetch(API)
        .then((response) => {
            return response.json()
        })
        .then(
            (data) => {
                this.setState({
                    user_profile: data.normal_user,
                    user_routines: data.routines,
                    user_fav: data.favorites,
                    avatar: data.normal_user.avatar.img,
                    archiv: data.normal_user.achivements,
                })
            }

        )
    }
    componentWillMount(){
        this.request()
    }
    render(){
        return(
            <MuiThemeProvider>
            <main>
                <div className="ProfileBody">
                    <h1>{`${this.state.user_profile.user_email} PROFILE`}</h1>
                    <div className="first">
                        <div className="tableP">
                            <h3>Mis Rutinas</h3>
                            <table className = "tablePadding">
                                    <tr>
                                        <th>Rutina #</th>
                                        <th>Duracion</th>
                                        <th>Tipo</th>
                                        <th>Progreso</th>
                                    </tr>
                                    {this.state.user_routines.map(routine=>
                                        {return(
                                            <tr>
                                                <td>{routine.id}</td>
                                                <td>{routine.routine_length}</td>
                                                <td>{routine.routine_type}</td>
                                                <td>{`${routine.progress_percentage}%`}</td>
                                            </tr>
                                        )}
                                    )}
                            </table>
                                <RaisedButton className="button" label="Descargar Rutina" style={style} /> 
                        </div>
                        <div className="tableP"> 
                            <h3>Mis Favoritos</h3>
                            <table className = "tablePadding">
                                    <tr>
                                        <th>Post #</th>
                                        <th>Post</th>
                                        <th>Tipo</th>
                                    </tr>
                                    {this.state.user_fav.map(fav =>{
                                            if(fav.post_type == 0){
                                                return(
                                                    <tr>
                                                        <td>{fav.id}</td>
                                                        <td>{fav.post_name}</td>
                                                        <td>Dieta</td>
                                                    </tr>
                                                )
                                            }else if(fav.post_type == 1){
                                                return(
                                                    <tr>
                                                        <td>{fav.id}</td>
                                                        <td>{fav.post_name}</td>
                                                        <td>Promoción</td>
                                                    </tr>
                                                )
                                            }else if(fav.post_type == 2){
                                                return(
                                                    <tr>
                                                        <td>{fav.id}</td>
                                                        <td>{fav.post_name}</td>
                                                        <td>Rutina</td>
                                                    </tr>
                                                )
                                            }
                                        }
                                    )}
                            </table> 
                            <div className="postbuttons">
                                    <RaisedButton className="button" label="Ver mis post" style={style} /> 
                                    <RaisedButton className="button" label="Crear Post" style={style} /> 
                            </div>
                        </div>
                    </div>
                    <div className="second ">
                        <div>
                            <img src={this.state.avatar} alt="placeholder"height="140" width="100"/>
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
                            <p align="left">Logros obtenidos</p>
                            {this.state.archiv.map(arch=>
                                {return(
                                    <img align="left" src={arch.achivement_icon} alt="achivement" height="42" width="42"/>
                                )}
                            )}
                        </div> 
                    </div>
                    
                        <RaisedButton className="closesession" label="Cerrar Sesion" style={style} /> 
                     
                </div>
            </main>
            </MuiThemeProvider>
        )
    }
}

export default Profile;