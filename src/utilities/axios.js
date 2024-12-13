// axios
import axios from "axios";
import { config } from "./constants.js";


const assistantAPI = axios.create({
	baseURL: config.url.API_URL,
});
// response
assistantAPI.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log(error.response)
		return Promise.reject(error);
	}
);

export { assistantAPI };
