import axios from "axios";
import config from "../config";

const API = axios.create({
  baseURL: config.SERVER_URL,
  timeout: 2500,
});

API.interceptors.request.use(req => {
  if (localStorage.getItem("loginData")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("loginData")).accessToken
    }`;
  }

  return req;
});

export const login = () => API.post("/api/login");

export const getRecentSites = userId => API.get(`/api/users/${userId}/sites`);
export const transformSite = originUrl => API.post("/api/sites", { originUrl });

export const createArticle = (userId, article) =>
  API.post(`/api/users/${userId}/articles`, { ...article });

export const getArticleList = userId =>
  API.get(`/api/users/${userId}/articles`);
export const getArticle = (userId, articleId) =>
  API.get(`/api/users/${userId}articles/${articleId}`);

export const updateArticle = (userId, articleId, article) =>
  API.put(`/api/users/${userId}articles/${articleId}`, { ...article });
export const updateLastVisitedSite = (userId, articleId, lastVisitedSiteUrl) =>
  API.patch(`/api/users/${userId}articles/${articleId}`, {
    lastVisitedSiteUrl,
  });

export const deleteArticle = (userId, articleId) =>
  API.delete(`/api/users/${userId}articles/${articleId}`);
