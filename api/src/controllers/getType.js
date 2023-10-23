const axios = require('axios');
const { Type } = require ('../db');

const getType = async () => {
    const tipeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
}