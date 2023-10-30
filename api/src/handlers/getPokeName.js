const getName = require('../controllers/getPokemonName');

const getNameHandlres = async (req, res) => {
    try {
        const {name} = req.query;
        const poke = await getName(name)
        console.log(poke);
        res.status(200).json(poke)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports = getNameHandlres;