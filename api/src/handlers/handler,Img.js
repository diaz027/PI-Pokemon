const getImg = require ('../controllers/imagenPokemon')

const imagenHandlers = async (req, res) =>{
    try {
        const newPoke = await getImg()
        res.status(200).json(newPoke)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports = imagenHandlers;