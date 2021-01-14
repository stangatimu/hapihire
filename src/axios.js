import axios from "axios";

const API = axios.create({
	baseURL: "https://shapihires.herokuapp.com",
	responseType: "json",
});

export default API;
