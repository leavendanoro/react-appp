import {combineReducers} from 'redux';
import mydiet from './mydietReducer';
import myroutine from './myroutineReducer';
import newpost from './newpostReducer';
import postsgrid from './postsgridReducer';
import routinehelper from './routinehelperReducer';
import userposts from './userpostsReducer';
import viewusers from './viewusersReducer';
import session from './sessionReducer'

const rootReducer = combineReducers({
    MyDiet,
    MyRoutine,
    NewPost,
    PostsGrid,
    RoutineHelper,
    UserPosts,
    ViewUsers
})

export default rootReducer;