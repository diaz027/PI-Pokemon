import { CREATE_POKEMON, GET_ID, GET_NAME, GET_POKEMON, IMAGEN, ORDER_ATAQUE, ORDER_A_Z, TYPES } from "./actions-types"


let initialState = {
    newPokes:[],//copia
    pokemones: [],//orginal
    detailsPoke:[],
    newTypes:[],
    allImg:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return{...state, newPokes:action.payload,  pokemones: action.payload}

        case GET_NAME:
            return{...state, newPokes: action.payload,  pokemones: action.payload}

        case CREATE_POKEMON:
            return{...state, newPokes:[...state.newPokes, action.payload],  pokemones:[...state.pokemones, action.payload]}

        case GET_ID:
            return{...state, detailsPoke: action.payload}

        case TYPES:
            return {...state, newTypes: action.payload}

        case IMAGEN:
                return {...state, allImg: action.payload}
        

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

        case ORDER_ATAQUE:
            if(action.payload === 'ataqueMin'){
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => a.attack - (b.attack));
                return{
                    ...state,
                    pokemones: [...result]
                };
            }
            if(action.payload === 'ataqueMax'){
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => b.attack - (a.attack));
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