import axios  from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-6e51f-default-rtdb.firebaseio.com/',
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default instance