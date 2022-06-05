import axios from "axios";
import config from "../config";

let accessToken = "";

if (localStorage.getItem("profile")) {
  accessToken = JSON.parse(localStorage.getItem("profile")).token;
}

const API = axios.create({
  baseURL: config.SERVER_URL,
  timeout: 2500,
});

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const login = () => API.post("/api/login", null, axiosConfig);
export const getRecentSites = userId =>
  API.get(`/api/users/${userId}/sites`, axiosConfig);
export const transformSite = originUrl => API.post("/api/sites", originUrl);
export const getArticleList = userId =>
  API.get(`/api/users/${userId}/articles`, axiosConfig);
export const createArticle = (userId, article) =>
  API.post(`/api/users/${userId}/articles`, article, axiosConfig);
export const deleteArticle = (userId, articleId) =>
  API.delete(`/api/users/${userId}articles/${articleId}`, null, axiosConfig);
export const updateArticle = (userId, articleId, article) =>
  API.put(`/api/users/${userId}articles/${articleId}`, article, axiosConfig);
export const updateLastVisitedSite = (userId, articleId, article) =>
  API.patch(`/api/users/${userId}articles/${articleId}`, article, axiosConfig);
export const getArticle = (userId, articleId) =>
  API.get(`/api/users/${userId}articles/${articleId}`, axiosConfig);
