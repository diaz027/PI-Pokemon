const axios = require('axios');
const sharp = require('sharp')
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
            const imageBuffer = await axios.get(imageUrl, { responseType: 'arraybuffer' }); // Descarga la imagen
            // Redimensiona la imagen a 200x200 píxeles
            const resizedImageBuffer = await sharp(imageBuffer.data)
                .resize(200, 200)
                .toBuffer();
            await Image.create({ image:imageUrl});
        }
    }

    return await Image.findAll();
}
module.exports = getImg;