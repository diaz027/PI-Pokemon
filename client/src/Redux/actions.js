import axios from 'axios'
import { GET_ID, GET_NAME, GET_POKEMON } from './actions-types'

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