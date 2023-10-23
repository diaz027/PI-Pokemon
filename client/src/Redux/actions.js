import axios from 'axios'
import { GET_POKEMON } from './actions-types'

export const getPokemon = () =>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:3001/pokemons`)
        console.log(response.data);
         dispatch({
            type: GET_POKEMON,
            payload: response.data
        });
    }
}