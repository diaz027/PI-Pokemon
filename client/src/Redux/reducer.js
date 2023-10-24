import { GET_POKEMON } from "./actions-types"


let initialState = {
    pokemones: [],//orginal
    newPokes:[],//copia
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{...state,
                 pokemones:action.payload,
                  newPokes:[...action.payload]}


            default:
                return state;
    }
}
export default reducer