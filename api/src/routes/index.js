const express = require('express');
const { Router } = require('express');
const getPokemonHandlers = require('../handlers/getPokemon');
const getByIdHandlers = require('../handlers/getById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.get('/pokemons/:idPokemon', getByIdHandlers)
mainRouter.get('/pokemons', getPokemonHandlers)
// mainRouter.get('/', )
// mainRouter.get('/', )


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
