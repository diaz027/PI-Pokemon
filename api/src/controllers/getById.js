const axios = require('axios')
const { Pokemon, Type } = require('../db');

const getPokemonById = async (idPokemon) => {
  //hacer un if con la info de la db
  if (idPokemon.toString().length > 5) {
    const pokemonDb = [await Pokemon.findAll(idPokemon, { include: { model: Type } })]
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
        types: pokemon.types.map(type => type.type.name)
      }
    })
    return newPokemon[0];
  }

  const getInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  const apiInfo = getInfo.data;
  const pokemonFund = {
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
  return pokemonFund
}

module.exports = getPokemonById;
