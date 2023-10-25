import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { getPokemon } from "../../Redux/actions";


//paginado
const POKEMON_PER_PAGE = 12;

const Home = () =>{
    const allpokes = useSelector((state) => state?.pokemones)
    console.log(allpokes)
    const  totalPokemon = allpokes?.length;
    const totalPage = Math.ceil(totalPokemon / POKEMON_PER_PAGE)
    const  [currentPage, setCurrentPage] = useState(0)
    const dispatch = useDispatch();
    
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

    
    return(
        <div>
            <Cards pokemones={pokeToDisplay} />

            <div>
                <button onClick={prevHandler} disabled={currentPage === 0}>Prev</button>
                <span> Página:{currentPage + 1} de {totalPage} </span>
                <button onClick={nextHandler} disabled={currentPage === totalPage - 1}>Next</button>
            </div>

        </div>
    )
}
export default Home;