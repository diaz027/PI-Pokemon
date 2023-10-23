const axios = require('axios')
// const { Pokemon, Type} = requiere('../db');

const getPokemonById = async(idPokemon) => {
    //hacer un if con la info de la db
  if(idPokemon.toString().length > 3){
    const pokemonDb = [await Pokemon.findAll(idPokemon, { include: { model: Type } })]
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
    return newPokemon[0];
  }

    const getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    const apiInfo = getInfo.data;
    return apiInfo;
}

module.exports = getPokemonById;
