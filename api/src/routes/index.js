const express = require('express');
const { Router } = require('express');
const getPokemonHandlers = require('../handlers/getPokemon');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.get('/pokemons', getPokemonHandlers)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
