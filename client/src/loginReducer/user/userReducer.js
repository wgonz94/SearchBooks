
export default function loginReducer(draft, action) {
    switch(action.type) {
        case 'field': {
            draft[action.fieldName]= action.payload;
            return;
        }
        case 'login': {
            draft.error= '';
            draft.isLoading = true;
            return;
        }
        case 'register': {
            draft.message= '';
            draft.isLoading = true;
            return;
        }
        case 'register-success': {
            draft.isLoading = false;
            draft.firstname = '';
            draft.lastname = '';
            draft.username = '';
            draft.email = '';
            draft.password = '';
            draft.password2 = '';
            return;  
        }
        case 'register-error': {
            draft.error = 'registration failed!'
            draft.isLoading = false;
            draft.firstname = '';
            draft.lastname = '';
            draft.username = '';
            draft.email = '';
            draft.password = '';
            draft.password2 = '';
            return;
        }
        case 'login-success': {
            localStorage.setItem('token', action.payload.token),
            draft.action.payload = action.payload;
            draft.isLoggedIn = true;
            draft.isLoading = false;
            draft.username = '';
            draft.password = '';
            return;
        }
        case 'error': {
            draft.error = 'Incorrect Username or Password!';
            draft.isLoggedIn = false;
            draft.isLoading = false;
            draft.username = '';
            draft.password = '';
            return;
        }
        case 'logOut': {
            localStorage.removeItem('token')
            draft.isLoggedIn = false;
            return;
        }
        case 'error-login': {
            draft.error = 'Not a User, Please Sign up!'
            draft.isLoggedIn = false;
            draft.isLoading = false;
            draft.username = ''
            draft.password = ''
            return;
        }
    }
}