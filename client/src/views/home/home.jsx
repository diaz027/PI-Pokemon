import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { getPokemon, orderAlfa } from "../../Redux/actions";


//paginado
const POKEMON_PER_PAGE = 12;

const Home = () =>{
    const allpokes = useSelector((state) => state?.pokemones)
    const dispatch = useDispatch();
    
    const totalPokemon = allpokes?.length;
    const totalPage = Math.ceil(totalPokemon / POKEMON_PER_PAGE)
    const  [currentPage, setCurrentPage] = useState(0)
    
    useEffect(() =>{
        dispatch(getPokemon());
    }, [dispatch]);

    const startPokes = currentPage * POKEMON_PER_PAGE;
    const endPokes = startPokes + POKEMON_PER_PAGE;
    const pokeToDisplay = allpokes?.slice(startPokes, endPokes);

    const nextHandler = () =>{
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

    
    return(
        <div>

            <select onChange={handlerOrder}>
                <option value="A">A - Z</option>
                <option value="Z">Z - A</option>
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