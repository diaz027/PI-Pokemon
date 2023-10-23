require('dotenv').config();
const axios = require('axios')
const { Pokemon, Type } = require('../db')
const URL = `https://pokeapi.co/api/v2/pokemon/?limit50`


const getPokemon = async () => {
    const pokemonDb = await Pokemon.findAll({ include: { model: Type } });
    const newPokemon = pokemonDb.map((pokemon) => {
        return {
            id: pokemon.id,
            name:pokemon.name,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            height: pokemon.height,
            weight: pokemon.weight
        }
    })

    const respose = await axios.get(`${URL}`)
    const result = respose.data;
    return newPokemon.concat(result);
}

module.exports = getPokemon;

