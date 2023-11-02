const axios = require('axios');
const { Image } = require('../db');

const getImg = async () => {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=500`);
    const result = apiInfo.data.results;
    

    for (const dataImg of result) {
        const pokemonInfo = await axios.get(dataImg.url)// info detalla del pokemon
        const imageUrl = pokemonInfo.data.sprites.other.dream_world.front_default// Obtengo la URL de la imagen del Pokémon
       

        const response = await Image.findAll({ where: { image: imageUrl } });

        if (response.length === 0) {
            // Si no existe, crea un nuevo registro en la base de datos
            await Image.create({ image:imageUrl});
        }
    }

    return await Image.findAll();
}
module.exports = getImg;