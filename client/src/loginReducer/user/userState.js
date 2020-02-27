import React from 'react';
import axios from 'axios';
import { useImmerReducer } from 'use-immer';
import {DispatchContext, StateContext} from './SDContext'
import loginReducer from './userReducer'
import setAuthToken from '../../utils/setAuthToken'

export const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: false,
    isLoading: false,
    user: {},
    error: '',
    username: '',
    password: '',
    firstname:'',
    lastname: '',
    email: '',
    password: '',
    password2: '',
};

const [state, dispatch] = useImmerReducer(loginReducer, initialState);

// // Register the User
export const register = async regData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const res = await axios.post('/api/user/register', regData, config);

        dispatch({ 
            type: 'register-success'
        })
    } catch(error) {
        dispatch({
            type: 'registration-error'
        })
    }
}

// // Login the User
export const login = async logData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post('/api/user/login', logData, config);

        dispatch({
            type: 'login-success',
            payload: res.data 
        });

    } catch (err) {
        dispatch({
            type: 'error',
        });
    }
};

export const logout = () => dispatch({ type: LOGOUT });