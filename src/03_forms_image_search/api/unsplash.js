import axios from 'axios';
const API_KEY = 'a9bce8902a6661462ae9c8d3b21a1d223e1c68d3449fb6efbfc0bcaa5948ce3d';
// const SEECRET_KEY = '88ec71ca3976fc05545215933e3f6b500addfbac6761b3e3abd1d2cb598260d9';
const URL = 'https://api.unsplash.com';

export default axios.create({
    baseURL: URL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});