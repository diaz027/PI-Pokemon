require('dotenv').config();
const axios = require('axios')
const { Pokemon, Type } = require('../db')
const URL = `https://pokeapi.co/api/v2/pokemon`


const getPokemon = async () => {
    const pokemonDb = await Pokemon.findAll({include: {model: Type}});
    const respose = await axios.get(`${URL}`)
    const result = respose.data;
    return pokemonDb.concat(result);
}

module.exports = getPokemon;

