import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
});


export default api

export const getRecipes = () => api.get('/recipes')

export const getRecipesById = (id:number) => api.get(`/recipes/${id}`)

export const createRecipe = (title:string,author:string|null,content:string)=>api.post('/recipes',{title,author,content})

export const deleteRecipe = (id:number)=> api.delete(`/recipes/${id}`)

export const getComments = (id:number)=>api.get(`/recipes/${id}/comments`)

export const createComment = (id:number,author:string|null,content:string) =>api.post(`/resipes/${id}/comments`,{author,content})

export const deleteComment = (id:number)=>api.delete(`/comments/${id}`)