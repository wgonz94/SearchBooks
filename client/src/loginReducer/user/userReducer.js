
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
        case 'success': {
            draft.isLoggedIn = true;
            draft.isLoading = false;
            draft.user = action.payload;
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
    }
}