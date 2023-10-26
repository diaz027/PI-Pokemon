const axios = require('axios');
const { Image } = require('../db');

const getImg = async () => {
    const apiInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const result = apiInfo.data.results;
    
    console.log(apiInfo);

    for (const dataImg of result) {
        const url = dataImg.url;//se utiliza para acceder al nombre de cada tipo dentro del bucle.

        const respose = await Image.findAll({ where: { url: url } });

        if (!respose) {
            // Si no existe, crea un nuevo registro en la base de datos
            await Image.create({ url: url });
        }
    }

    return await Image.findAll();
}
module.exports = getImg;