require('dotenv').config();
const axios = require('axios')
const { Pokemon, Type } = require('../db')
const URL = `https://pokeapi.co/api/v2/pokemon`


const getPokemon = async () => {
    const pokemonDb = await Pokemon.findAll({ include: { model: Type } });
    const newPokemon = pokemonDb.map((pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            hp: pokemon.hp,
            attack: pokemon.attack,
            defense: pokemon.defense,
            height: pokemon.height,
            weight: pokemon.weight,
            types: Pokemon.Type.map(element => element.dataValues.name)
        }
    })

    const respose = await axios.get(`${URL}/?limit=50`)
    const pokeResult = respose.data.results;
    const promises = pokeResult.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const apiInfo = pokemonResponse.data;
        const pepe = {
            id: apiInfo.id,
            name: apiInfo.name,
            image: apiInfo.sprites.front_default,
            hp: apiInfo.stats[0]["base_stat"],
            attack: apiInfo.stats[1]["base_stat"],
            defense: apiInfo.stats[2]["base_stat"],
            height: apiInfo.height,
            weight: apiInfo.weight,
            types: apiInfo.types.map(type => type.type.name)
        }
        return pepe

    });
    const pokeData = await Promise.all(promises);

    const combinedData = newPokemon.concat(pokeData);
    return combinedData;
}

module.exports = getPokemon;