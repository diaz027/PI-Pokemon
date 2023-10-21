const axios = require('axios')
const { Pokemon, Type} = requiere('../db');

const getPokemonById = async(id) => {
    //hacer un if con la info de la db

    const getInfo = await axios.get("https://pokeapi.co/api/v2/pokemon/{id}")
    const apiInfo = getInfo.data;
    return apiInfo;
}
