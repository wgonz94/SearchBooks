
export default (state, action) => {
    switch(action.type) {
        case 'field': {
            return {
                ...state,
            [action.fieldName]: action.payload,
            };
        }
        case 'login': {
            return{
                ...state,
            error: '',
            isLoading: true
            }
        }
        case 'register': {
            return{
                ...state,
            isLoading: true
            };
        }
        case 'register-success': {
            return{
            ...state,
            isLoading: false,
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            };  
        }
        case 'register-error': {
            return{
                ...state,
            error : 'registration failed!',
            isLoading : false,
            firstname : '',
            lastname : '',
            username : '',
            email : '',
            password : '',
            password2 : '',
             }   
        }
        case 'login-success': {
            localStorage.setItem('token', action.payload.token);
            return{
            ...state,
            user : action.payload,
            isLoggedIn : true,
            isLoading : false,
            username : '',
            password : '',
            }
        }
        case 'error': {
            return{
            ...state,
            error : 'Incorrect Username or Password!',
            isLoggedIn : false,
            isLoading : false,
            username : '',
            password : '',
            }
        }
        case 'logOut': {
            localStorage.removeItem('token');
            return{
            ...state,
            isLoggedIn : false
            }
        }
        case 'error-login': {
            return {
            ...state,
            error: 'Not a User, Please Sign up!',
            isLoggedIn : false,
            isLoading : false,
            username : '',
            password : '',
            }
        }
    }
}