import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:3001",
	responseType: "json",
});

export default API;
