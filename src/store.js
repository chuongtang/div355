import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer, userRegisterReducer} from './reducers/userReducers'
import {postCreateReducer, myPostsListReducer, postDetailsReducer} from './reducers/postReducers'
import {commentCreateReducer} from './reducers/commentReducers'

const reducer = combineReducers({
  
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  postCreate: postCreateReducer,
  postsList: myPostsListReducer,
  postDetails: postDetailsReducer,
  commentCreate: commentCreateReducer,
});


// use local storage for storing loggED in Token
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
  };

const middleware = [thunk]

const store = createStore (
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;