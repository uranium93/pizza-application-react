import axios from 'axios';

const instance = axios.create({
	baseURL:'https://food-application-react.firebaseio.com/'
});

export default instance;