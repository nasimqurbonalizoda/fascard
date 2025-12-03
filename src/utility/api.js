import axios from "axios";

export const API = import.meta.env.VITE_APP_API;

export const axiosRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const apiInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

function saveToken(token) {
  localStorage.setItem("token", token);
}

function removeToken() {
  localStorage.removeItem("token");
}

export {saveToken,removeToken};
