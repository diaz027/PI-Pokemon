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


    const allTypes = await Type.findOne({where: {name: types}});// busco los types por cada nombres
    await response.addType(allTypes)//el nuevo pokemon que agrego le pongo un type
  
    return response;
}
module.exports = createPokemon;