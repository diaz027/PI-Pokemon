const { Pokemon, Type } = require ('../db')

const createPokemon = async(name, image, hp, attack, defense, height, weight, types) =>{

  const response = await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    height,
    weight
  })

  types.array.forEach(async (tipes) => {
    const allTypes = await Type.findOne({where: {name: tipes}});
    await response.addType(allTypes)
  });
    return response;
}
module.exports = createPokemon;