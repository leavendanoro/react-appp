import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';
import MyRoutine from './MyRoutine';
import MyDiet from './MyDiet';
import EditPost from './EditPost';
import RoutineHelper from './RoutineHelper';
import NewPost from './NewPost';
import Post from './Post';
import UserPosts from './UserPosts';
import Mapa from './Mapa';
import PostsGrid from './PostsGrid';
import ViewUser from './ViewUser';

class Main extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/myroutine?id" component={MyRoutine} />
                    <Route path="/mydiet?id" component={MyDiet} />
                    <Route path="/editpost?id" component={EditPost} />
                    <Route path="/routinehelper" component={RoutineHelper} />
                    <Route path="/newpost" component={NewPost} />
                    <Route path="/viewpost?id" component={Post} />
                    <Route path="/myposts" component={UserPosts} />
                    <Route path="/map" component={Mapa} />
                    <Route path="/posts" component={PostsGrid} />
                    <Route path="/wiewuser?name" component={ViewUser} />
                    </div>
                </Switch>
            </main>
        )
    }
}

function requireAuth(nextState, replace) {  
    if (!sessionStorage.jwt) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

export default Main;