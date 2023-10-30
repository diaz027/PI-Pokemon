import { CREATE_POKEMON, FILTER_API_DB, GET_ID, GET_NAME, GET_POKEMON, IMAGEN, ORDER_ATAQUE, ORDER_A_Z, TYPES, TYPES_FILTER } from "./actions-types"


let initialState = {
    newPokes: [],//copia
    pokemones: [],//orginal
    detailsPoke: [],
    newTypes: [],
    allImg: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON:
            return { ...state, newPokes: action.payload, pokemones: action.payload }

        case GET_NAME:
            if(action.payload.hasOwnProperty('name')){ 
                return { ...state, newPokes: [action.payload], pokemones: [action.payload] }
            } else {
                return { ...state, newPokes: [...action.payload], pokemones: [...action.payload] }
            }

        case CREATE_POKEMON:
            return { ...state, newPokes: [...state.newPokes, action.payload], pokemones: [...state.pokemones, action.payload] }

        case GET_ID:
            return { ...state, detailsPoke: action.payload }

        case TYPES:
            return { ...state, newTypes: action.payload }

        case IMAGEN:
            return { ...state, allImg: action.payload }



        //filtrados
        case FILTER_API_DB:
            console.log(action.payload);
            let filteredPokemons = [];
            if (action.payload === 'api') {
                filteredPokemons = state.newPokes.filter((poke) => poke.id.toString().length < 6)
            } else if (action.payload === 'db') {
                filteredPokemons = state.newPokes.filter((poke) => poke.id.toString().length > 6)
            }  else if (action.payload === 'todos') { filteredPokemons = state.newPokes }
            return {
                ...state,
                pokemones: [...filteredPokemons],
            }

        case TYPES_FILTER:
            const copyType = [...state.newPokes]
            const response = [...copyType.filter((poke) => {
                return poke.types && poke.types.split(',').map(element => element.trim()).includes(action.payload)
            })]
            return {
                ...state,
                pokemones: response
            }


        //orderdamiento
        case ORDER_A_Z:
            if (action.payload === 'A') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => a.name.localeCompare(b.name));
                return {
                    ...state,
                    pokemones: [...result]
                };
            }
            if (action.payload === 'Z') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => b.name.localeCompare(a.name));
                return {
                    ...state,
                    pokemones: [...result]
                };
            }

        case ORDER_ATAQUE:
            if (action.payload === 'ataqueMin') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => a.attack - (b.attack));
                return {
                    ...state,
                    pokemones: [...result]
                };
            }
            if (action.payload === 'ataqueMax') {
                const allCopy = [...state.pokemones];
                const result = allCopy.sort((a, b) => b.attack - (a.attack));
                return {
                    ...state,
                    pokemones: [...result]
                };
            }

        default:
            return state;
    }
}
export default reducer