import axios from 'axios';

// Cambia la URL a la dirección de tu backend
const API_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_URL,
});
