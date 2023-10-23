import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Cards from "../../componentes/cards/cards";
import { getPokemon } from "../../Redux/actions";

const Home = () =>{
    const allpokes = useSelector((state) => state?.newPokes)
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(getPokemon());
    }, [dispatch]);

    return(
        <div>
            <h1>estas en home</h1>
            <Cards newPokes={allpokes}/>
        </div>
    )
}
export default Home;