import React, { Component } from 'react';
import Post from './Post';

import '../styles/PostsGrid.css';/*

const API = 'https://hn.algolia.com/api/v1/search?query=';*/

const API = 'https://unhealthy-back.herokuapp.com/posts';

class PostsGrid extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            posts: [],
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
                    posts: data,
                })
            }

        )
    }
    componentWillMount(){
        this.request()
    }
    
    render(){
        const { posts } = this.state;
        return (
            <div className="PostsBody">
            </div>
        );
    }
}

export default PostsGrid;