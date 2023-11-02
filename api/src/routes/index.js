const express = require('express');
const { Router } = require('express');
const getPokemonHandlers = require('../handlers/getPokemon');
const getByIdHandlers = require('../handlers/getById');
const getNameHandlres = require('../handlers/getPokeName');
const createPost = require('../handlers/createPoke');
const getTypeHandlers = require('../handlers/getTypesHandlres');
const imagenHandlers = require('../handlers/handler,Img');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.get('/name', getNameHandlres )
mainRouter.get('/pokemons/:idPokemon', getByIdHandlers)
mainRouter.get('/pokemons', getPokemonHandlers)
mainRouter.post('/pokemons', createPost)
mainRouter.get('/types',getTypeHandlers )
mainRouter.get('/imagenes', imagenHandlers)

module.exports = mainRouter;
