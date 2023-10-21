const getPokemon = require('../controllers/getPokemon');

const getPokemonHandlers = async (req, res) =>{
    try {
        const newPokemon = await getPokemon()
        res.status(200).json(newPokemon)
    } catch (error) {
        res.status(404).json({error: error.mesage})
    }
}
module.exports = getPokemonHandlers;