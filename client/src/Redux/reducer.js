import { GET_ID, GET_NAME, GET_POKEMON, ORDER_A_Z } from "./actions-types"


let initialState = {
    newPokes:[],//copia
    pokemones: [],//orginal
    detailsPoke:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{...state, newPokes:action.payload,  pokemones: action.payload}

        case GET_NAME:
            return{...state, newPokes: action.payload,  pokemones: action.payload}

        case GET_ID:
            return{...state, detailsPoke: action.payload}

        case ORDER_A_Z:
            if(action.payload === 'A') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => a.name.localeCompare(b.name));
                return{
                    ...state,
                    pokemones: [...result]
                };
            }
            if(action.payload === 'Z') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => b.name.localeCompare(a.name));
                return{
                    ...state,
                    pokemones: [...result]
                };
            }

            default:
                return state;
    }
}
export default reducer