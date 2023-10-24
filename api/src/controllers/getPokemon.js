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
            weight: pokemon.weight
        }
    })

    const respose = await axios.get(`${URL}/?limit=50`)
    const pokeResult = respose.data.results;
    // const pokeDataPromises = pokeResult.map(async (pokemon) => {
    //     const pokemonResponse = await axios.get(pokemon.url);
    //     const { props} = pokemonResponse.data;

    //     return {
    //        props
    //     };
    // });
    // const pokeData = await Promise.all(pokeDataPromises);

    //brian
    // const promises = respose.data.results.map(pokemon => axios.get(pokemon.url));
    //     pokemons = await Promise.all(promises);
    //     pokemons = pokemons.map(pokemon => filterPokemonData(pokemon.data));
    // const combinedData = newPokemon.concat(promises);

    // chatgpt
    const promises = pokeResult.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return pokemonResponse.data;
    });
    const pokeData = await Promise.all(promises);

    const combinedData = newPokemon.concat(pokeData);


    // console.log(pokeDataPromises);
    console.log(promises);
    return combinedData;

    // console.log(pokeResult.url);
    // return newPokemon.concat(pokeResult);
}

module.exports = getPokemon;

