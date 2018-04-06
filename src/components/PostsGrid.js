import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Post from './Post';
import {Card, CardActions, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';


import '../styles/PostsGrid.css';

const API = 'https://unhealthy-back.herokuapp.com/posts?page=1';
const style = {
    margin: 12,
};

class PostsGrid extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            page: 1,
            total_pages: 1,
        }
    }
    request(API){
        fetch(API)
        .then((response) => {
            return response.json()
        })
        .then(
            (data) => {
                this.setState({
                    posts: data.posts,
                    page: data.current_page,
                    total_pages: data.total_pages,
                })
            }

        )
    }
    componentWillMount(){
        this.request(API)
    }

    render(){
        const food = 'https://www.shareicon.net/download/2016/09/02/824429_fork_512x512.png';
        const exerc = 'https://138603-401650-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/exercise-icon-19.png';
        const prom = 'https://www.accenture.com/t20170411T102552Z__w__/ae-en/_acnmedia/Accenture/next-gen-4/service-solutions-consumer-goods/Accenture-TPM-Icon.pngla=en';
        var pages = [];
        for (var i = 1; i <= this.state.total_pages; i++) {
            pages.push(
                <MuiThemeProvider>
                       <RaisedButton key={i} label={`Pag ${i}`} style={style} onClick={this.request(`https://unhealthy-back.herokuapp.com/posts?page=${i}`)} />
                </MuiThemeProvider>);
        }        
        return(
            <div className="PostsBody">
                {this.state.posts.map(post =>{
                    if(post.post_type == 0){
                        return(
                            <MuiThemeProvider>
                                <Card>
                                <CardHeader
                                title={`By ${post.normal_user_email}`}
                                subtitle= {`Posted at ${post.created_at}`}
                                avatar = {food}
                                />
                                <CardTitle title={post.post_name} subtitle={`Score ${post.post_score}`} />
                                <CardActions>
                                    <RaisedButton label="Go to post" />
                                    <RaisedButton label={`Go to ${post.normal_user_email} profile`} />
                                </CardActions>
                                </Card>
                            </MuiThemeProvider>
                        )
                    }else if(post.post_type == 1){
                        return(
                            <MuiThemeProvider>
                                <Card>
                                <CardHeader
                                title={`By ${post.normal_user_email}`}
                                subtitle= {`Posted at ${post.created_at}`}
                                avatar = {exerc}
                                />
                                <CardTitle title={post.post_name} subtitle={`Score ${post.post_score}`} />
                                <CardActions>
                                    <RaisedButton label="Go to post" />
                                    <RaisedButton label={`Go to ${post.normal_user_email} profile`} />
                                </CardActions>
                                </Card>
                            </MuiThemeProvider>
                        )
                    }else if(post.post_type == 2){
                        return(
                            <MuiThemeProvider>
                                <Card>
                                <CardHeader
                                title={`By ${post.normal_user_email}`}
                                subtitle= {`Posted at ${post.created_at}`}
                                avatar = {prom}
                                />
                                <CardTitle title={post.post_name} subtitle={`Score ${post.post_score}`} />
                                <CardActions>
                                    <RaisedButton label="Go to post" />
                                    <RaisedButton label={`Go to ${post.normal_user_email} profile`} />
                                </CardActions>
                                </Card>
                            </MuiThemeProvider>
                        )
                    }
                }
                )}
                <div className="PageNavigator">
                    {pages}
                </div>
            </div>
        )
        
    }
}

export default PostsGrid;   