const axios = require('axios');
const { Type } = require('../db');

const getType = async () => {
    const tipeApi = await axios.get(`https://pokeapi.co/api/v2/type`)
    const result = tipeApi.data
    const existingType = await Type.findAll({ where: { name: type } });

    if (!existingType) {
        // Si no existe, crea un nuevo registro en la base de datos
        await Type.create({ name: type });
    }

    return existingType;
}
module.exports = getType;