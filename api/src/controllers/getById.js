const axios = require('axios')
// const { Pokemon, Type} = requiere('../db');

const getPokemonById = async(idPokemon) => {
    //hacer un if con la info de la db

    const getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    const apiInfo = getInfo.data;
    return apiInfo;
}

module.exports = getPokemonById;
