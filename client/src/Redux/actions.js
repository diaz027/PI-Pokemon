import axios from 'axios'
import { CREATE_POKEMON, FILTER_API_DB, GET_ID, GET_NAME, GET_POKEMON, IMAGEN, ORDER_ATAQUE, ORDER_A_Z, TYPES, TYPES_FILTER } from './actions-types'

export const getPokemon = () =>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:3001/pokemons`)
         dispatch({
            type: GET_POKEMON,
            payload: response.data
        });
    }
}
export const getPokeName = (name) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/name?name=${name}`)
        dispatch({
            type: GET_NAME,
            payload: response.data
        })
        } catch (error) {
            alert(`No se encontró ningún perro con el nombre "${name}"`);
        }
    }
}

export const getById = (id) => {
    return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        dispatch({
            type: GET_ID,
            payload: response.data
        })
    }
}

export const createPokemon = (data) =>{
    console.log(createPokemon)
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3001/pokemons`, data)
            console.log(response.data);
            alert('ya esta creado')
            dispatch ({
                type:CREATE_POKEMON,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
            
        }
    }
}

export const allTypes = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/types`);
        dispatch({
              type: TYPES,
              payload: response.data,
        });
  }
}

export const newImagenes = () => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/imagenes`);
        dispatch({
              type: IMAGEN,
              payload: response.data,
        });
  }
}

export const filterTypes = (name) => {
    return { type:TYPES_FILTER, payload:name }
}


export const filterApiDb = (value) => {
    return{ type:FILTER_API_DB, payload: value }
}


export const orderAlfa = (order) =>{
    return { type: ORDER_A_Z, payload: order}
}

export const orderAttack = (order) =>{
    return{ type: ORDER_ATAQUE, payload: order }
}