import axios from 'axios';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['Auth-token'];
    }
};

export default setAuthToken;