import React, { Component } from 'react';
import '../styles/NewPost.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
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

class NewPost extends Component{
    render(){
        return(
            <main className="NewPostBody">
                <div className="title">
                    <h1>Create Post</h1>
                </div>    
                <div className="form">
                    <MuiThemeProvider muiTheme={muiTheme}>
                            <form>
                                <TextField
                                hintText="Titulo para el post"
                                floatingLabelText="Titulo:"
                                fullWidth={true}
                                /><br />
                                <TextField
                                hintText="Post"
                                floatingLabelText="Post:"
                                fullWidth={true}
                                /><br />
                                <RaisedButton className="button" label="Subir archivos" style={style} />
                                <TextField
                                hintText="Nombre del archivo"
                                floatingLabelText="Nombre de archivo:"
                                /><br />
                            </form>   
                        <RaisedButton className="belowbutton" label="Publicar" style={style} />     
                    </MuiThemeProvider>
                </div> 
                <div className="formclosesession">
                    <MuiThemeProvider muiTheme={muiTheme}>
                            <RaisedButton className="closesession" label="Cerrar Sesion" style={style} /> 
                    </MuiThemeProvider>  
                </div>
            </main>
        )
    }
}

export default NewPost;