import React, {useReducer} from 'react';
import axios from 'axios';
import {UserContext} from './SDContext'
import UserReducer from './userReducer'
import setAuthToken from '../../utils/setAuthToken'


const UserState = props => {
const initialState = {
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

const [state, dispatch] = useReducer(UseReducer, initialState);

const setUser = async () => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
        dispatch({ type: 'setUser', payload: res.data });
    } 
};

// // Register the User
const register = async regData => {
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
        setUser();
    } catch (err) {
        dispatch({
            type: 'error',
        });
    }
};


export const logout = () => dispatch({ type: LOGOUT });


return (
    <UserContext.Provider
        value={{
            // EVERYTHING WE NEED AVAILABE MUST BE HERE
            token: state.token,
            isLoggedIn: state.isLoggedIn,
            isLoading: state.isLoading,
            user: state.user,
            error: state.error,
            register,
            login,
            logout,
        }}
    >
        {props.children}
    </UserContext.Provider>
);

}

export default UserState;