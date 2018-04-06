import React, { Component } from 'react';
import '../styles/Profile.css';


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
                                        <td>Eve</td>
                                        <td>Jackson</td>
                                        <td>94</td>
                                    </tr>
                            </table>
                            <button className="button">Descargar Rutina</button>
                            <button className="button">Crear Rutina</button>
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
                            <button className="button">Descargar Dieta</button>
                            <button className="button">Crear Dieta</button>
                        </div>
                        <button className="button">Ver mis Post</button>
                        <button className="button">Crear Post</button>
                    </div>
                    <div className="second ">
                        <p>This is another test</p>
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
                            <p align="left">Progreso de hoy</p>
                            <progress max="100" value="80"></progress>
                        </div>   
                        <div>
                            <p align="left">Logros obtenidos</p>
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                            <img align="left" src="http://via.placeholder.com/50x50" alt="achivement" />
                        </div> 
                    </div>
                    <button className="button">Cerrar Sesion</button>
                </div>
            </main>
        )
    }
}

export default Profile;