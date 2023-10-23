const createPokemon = require('../controllers/createPokemon');

const createPost = async (req, res) => {
    try {
        const {name, image, hp, attack, defense, height, weight, types} = req.body;
        const poke = await createPokemon(name, image, hp, attack, defense, height, weight, types)
        res.status(200).json(poke)
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}
module.exports = createPost;