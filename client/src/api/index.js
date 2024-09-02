import axios from 'axios';

const url = 'http://localhost:5000/foods'

export const fetchFoods = () => axios.get(url);