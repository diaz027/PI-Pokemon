import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { allTypes, filterApiDb, filterTypes, getPokemon, newImagenes, orderAlfa, orderAttack } from "../../Redux/actions";
import style from './home.module.css'
import { useNavigate } from "react-router-dom";


//paginado
const POKEMON_PER_PAGE = 12;

const Home = () => {
    //paginado
    const allTYPE = useSelector((state) => state?.newTypes)
    const allpokes = useSelector((state) => state?.pokemones)
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();

    const totalPokemon = allpokes?.length;
    const totalPage = Math.ceil(totalPokemon / POKEMON_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(0)

    //combate
    const [selectedPokemon1, setSelectedPokemon1] = useState(null);
    const [selectedPokemon2, setSelectedPokemon2] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch]);

    const startPokes = currentPage * POKEMON_PER_PAGE;
    const endPokes = startPokes + POKEMON_PER_PAGE;
    const pokeToDisplay = allpokes?.slice(startPokes, endPokes);

    const nextHandler = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevHandler = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }


    //seleccion de pokemones para combate
    const handlePokemonSelect = (pokemon) => {
        if (!selectedPokemon1) {
            setSelectedPokemon1(pokemon);
        } else if (!selectedPokemon2) {
            setSelectedPokemon2(pokemon);
        }
    }

    //inicio de batalla
    const startBattle = () => {
        if (selectedPokemon1 && selectedPokemon2) {
            navigate(`/combate?pokemon1=${selectedPokemon1.id}&pokemon2=${selectedPokemon2.id}`);
        } else {
            alert('Selecciona dos Pokémon para iniciar la batalla.');
        }
    };




    //ordenamientos
    const handlerOrder = (event) => {
        dispatch(orderAlfa(event.target.value));
        setCurrentPage(0)
    }

    const handlerOrderAttack = (event) => {
        setCurrentPage(0)
        dispatch(orderAttack(event.target.value))
    }


    //filtros
    const handlerDbApi = (event) => {
        const result = event.target.value
        setCurrentPage(0)
        dispatch(filterApiDb(result))
    }

    const handlerFilter = (event) => {
        const seleccion = event.target.value;
        setTypes(seleccion);
        setCurrentPage(0)
        dispatch(filterTypes(seleccion))
    }
    useEffect(() => {
        dispatch(allTypes());
        dispatch(newImagenes())
    }, [dispatch]);

    return (
        <div className={style.home}>
            <div className={style.homeContainer}>

                <select className={style.selectFiltro} onChange={handlerOrder}>
                    <option value="todos">Todos API/DB</option>
                    <option value="A">A - Z</option>
                    <option value="Z">Z - A</option>
                </select>

                <select className={style.selectFiltro} onChange={handlerOrderAttack}>
                    <option value="todos">Min/Max - API/DB</option>
                    <option value="ataqueMin">ataque min</option>
                    <option value="ataqueMax">ataque max</option>
                </select>


                <select className={style.selectFiltro} onChange={handlerDbApi} >
                    <option value="todos">API/BD</option>
                    <option value='api'>API</option>
                    <option value='db'>BD</option>
                </select>

                <select className={style.selectFiltro}
                    onChange={handlerFilter}>
                    {allTYPE.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
                </select>
            </div>


            <button className={`${style.buttonIniciarBatalla}`} onClick={startBattle}>⚔️</button>

            <Cards pokemones={pokeToDisplay} handlePokemonSelect={handlePokemonSelect} />

            <div>
                <button className={style.selectFiltro} onClick={prevHandler} disabled={currentPage === 0}>Prev</button>
                <span style={{ color: 'white' }}> pagina: {currentPage + 1} de {totalPage}</span>
                <button className={style.selectFiltro} onClick={nextHandler} disabled={currentPage === totalPage - 1}>Next</button>
            </div>


        </div>
    )
}
export default Home;