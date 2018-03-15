import React, { Component } from 'react';
import '../styles/Home.css';
import Register from './Register';


class Home extends Component{
    render(){
        return(
            <div className="HomeBody">
            <div className="HomeInfo">
                <h1>Welcome to UNHealthy</h1>
                <h3>Here is the Home info</h3>
            </div>
            <Register/>    
            </div>
        )
    }
}

export default Home;