const express = require('express');
const { Router } = require('express');
const getPokemonHandlers = require('../handlers/getPokemon');
const getByIdHandlers = require('../handlers/getById');
const getNameHandlres = require('../handlers/getPokeName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.get('/name', getNameHandlres )
mainRouter.get('/pokemons/:idPokemon', getByIdHandlers)
mainRouter.get('/pokemons', getPokemonHandlers)
// mainRouter.get('/', )


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
