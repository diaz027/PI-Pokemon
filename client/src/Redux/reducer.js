import { GET_ID, GET_NAME, GET_POKEMON } from "./actions-types"


let initialState = {
    pokemones: [],//orginal
    newPokes:[],//copia
    detailsPoke:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{...state, pokemones:action.payload, newPokes:action.payload}

        case GET_NAME:
            return{...state, pokemones: action.payload, newPokes: action.payload}

        case GET_ID:
            return{...state, detailsPoke: action.payload}


            default:
                return state;
    }
}
export default reducer