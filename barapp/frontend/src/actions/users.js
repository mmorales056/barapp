import axios from 'axios';
import { createMessage, returnErrors } from './messages'
import {GET_USERS, DELETE_USER, ADD_USER} from './types'

//Get All Users
export const getUsers = ()=> dispatch => {
    axios.get('/api/user/').then( res =>{
       dispatch({
           type: GET_USERS,
           payload:res.data
       });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

//Delete an User
export const deleteUser = id => dispatch => {
    axios.delete(`/api/user/${id}/`).then( res =>{
       dispatch(createMessage({deleteUser: 'Usuario Eliminado con exito'}));
       dispatch({
           type: DELETE_USER,
           payload:id 
       });
    }).catch(err => console.log(err))
}

//Add an User
export const addUser = (user)=> dispatch => {
    axios.post('/api/user/',user).then( res =>{
       dispatch(createMessage({addUser: 'Usuario agregado'}));
       dispatch({
           type: ADD_USER,
           payload:res.data
       });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}