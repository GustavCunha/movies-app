import axios from "axios";

//URL Filmes em Cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=241b61ce671c2fec6d601bc40f28d3bb&language=pt-BR&page=1
export const key = '241b61ce671c2fec6d601bc40f28d3bb'

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default API;