import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { getPokemon } from "../../Redux/actions";

const Home = () =>{
    const allpokes = useSelector((state) => state?.pokemones)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(getPokemon());
    }, [dispatch]);

    
    return(
        <div>
            <Cards pokemones={allpokes} />

        </div>
    )
}
export default Home;