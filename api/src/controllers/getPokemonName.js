const axios = require('axios');
const { Op } = require ('sequelize')
const { Pokemon } = require('../db');

const getName = async (name) => {
    const pokemonDb = await Pokemon.findAll({ where: { name:{[Op.iLike]: `%${name}%`} } });
    
    if(pokemonDb.length > 0) {
        return pokemonDb
    } 
    
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
    console.log(pokemonFund);
    return pokemonFund
   
}

module.exports = getName;