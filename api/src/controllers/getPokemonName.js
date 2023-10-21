const axios = require('axios');
const { Pokemon } = require('../db');

const getName = async(name) => {
    const pokemonDb = await Pokemon.findAll({where: {name: name}});
    const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const resultApi= pokeapi.data
    return pokemonDb.concat(resultApi);
}

module.exports = getName;