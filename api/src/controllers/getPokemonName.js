const axios = require('axios');
const { Pokemon } = require('../db');

const getName = async (name) => {
    const pokemonDb = await Pokemon.findAll({ where: { name: name } });
    const pokeapi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = pokeapi.data
    const pokemonFund = {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        hp: pokemon.stats[0]["base_stat"],
        attack: pokemon.stats[1]["base_stat"],
        defense: pokemon.stats[2]["base_stat"],
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(type => type.type.name)
    }
    return pokemonDb.concat(pokemonFund);
}

module.exports = getName;