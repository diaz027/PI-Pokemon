import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { allTypes, filterApiDb, filterTypes, getPokemon, orderAlfa, orderAttack } from "../../Redux/actions";
import style from './home.module.css'


//paginado
const POKEMON_PER_PAGE = 12;

const Home = () => {
    const allTYPE = useSelector((state) => state?.newTypes)
    const allpokes = useSelector((state) => state?.pokemones)
    const [types, setTypes] = useState("");
    const dispatch = useDispatch();

    const totalPokemon = allpokes?.length;
    const totalPage = Math.ceil(totalPokemon / POKEMON_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(0)

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

    const handlerOrder = (event) => {
        dispatch(orderAlfa(event.target.value));
    }

    const handlerOrderAttack = (event) => {
        dispatch(orderAttack(event.target.value))
    }

    const handlerDbApi = (event) => {
        const result = event.target.value
        console.log(result);
        dispatch(filterApiDb(result))
    }

    const handlerFilter = (event) => {
        const seleccion = event.target.value;
        setTypes(seleccion);
        dispatch(filterTypes(seleccion))
    }
    useEffect(() => {
        dispatch(allTypes());
    }, []);

    return (
        <div className={style.home}>

            <select onChange={handlerOrder}>
                <option value="A">A - Z</option>
                <option value="Z">Z - A</option>
            </select>

            <select onChange={handlerOrderAttack}>
                <option value="ataqueMin">ataque min</option>
                <option value="ataqueMax">ataque max</option>
            </select>


            <select onChange={handlerDbApi} >
                <option value='api'>api</option>
                <option value='db'>db</option>
            </select>

            <select
                onChange={handlerFilter}>
                {allTYPE.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
            </select>


            <Cards pokemones={pokeToDisplay} />

            <div>
                <button onClick={prevHandler} disabled={currentPage === 0}>Prev</button>
                <span> pagina: {currentPage + 1} de {totalPage}</span>
                <button onClick={nextHandler} disabled={currentPage === totalPage - 1}>Next</button>
            </div>

        </div>
    )
}
export default Home;