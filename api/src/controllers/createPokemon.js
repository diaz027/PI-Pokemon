const { Pokemon, Type } = require ('../db')

const createPokemon = async(name, image, hp, attack, defense, height, weight, types) =>{

  const response = await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    height,
    weight,
    types
  })

  types.map(async (temp) => { 
    const firstType = await Type.findOne({ where: { name: temp} });
      await response.addTypes(firstType);
    });
    return response;
}
module.exports = createPokemon;