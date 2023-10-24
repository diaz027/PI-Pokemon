import { GET_ID, GET_NAME, GET_POKEMON } from "./actions-types"


let initialState = {
    pokemones: [],//orginal
    newPokes:[],//copia
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{...state, pokemones:action.payload, newPokes:action.payload}

        case GET_NAME:
            return{...state, pokemones: action.payload, newPokes: action.payload}

        case GET_ID:
            return{...state, pokemones: action.payload, newPokes: action.payload}


            default:
                return state;
    }
}
export default reducer