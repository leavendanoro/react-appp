import React, { Component } from 'react';
import '../styles/Profile.css';

const API = 'https://unhealthy-back.herokuapp.com/normal_users/2';

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
                            <button className="button">Descargar Rutina</button>
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
                        </div>
                        <button className="button">Ver mis Post</button>
                        <button className="button">Crear Post</button>
                    </div>
                    <div className="second ">
                        <div>
                            <img src={this.state.avatar} alt="placeholder"/>
                            <div>
                                <p>John Doe</p>
                                <p>Rating: 4,5</p>
                            </div>
                        </div>
                        <div align="justify">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>    
                        </div>
                        <div>
                            <p align="left">Progreso de hoy</p>
                            <progress max="100" value="80"></progress>
                        </div>   
                        <div>
                            <p align="left">Logros obtenidos</p>
                            {this.state.archiv.map(arch=>
                                {return(
                                    <img align="left" src={arch.achivement_icon} alt="achivement" />
                                )}
                            )}
                        </div> 
                    </div>
                    <button className="button">Cerrar Sesion</button>
                </div>
            </main>
        )
    }
}

export default Profile;