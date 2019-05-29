import axios from 'axios';

const instance = axios.create({
	baseURL:'gs://food-application-react.appspot.com/'
});

export default instance;