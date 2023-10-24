import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";

const Details = () => {
    const dispatch = useDispatch();
    const allPokemon = useSelector((state) => state.newPokes)

    useEffect(() =>{
        dispatch(getById());
    }, [dispatch])

    return (
        <div>
            <h2>{allPokemon.name}</h2>
            <h2>{allPokemon.image}</h2>
            <h2>{allPokemon.hp}</h2>
            <h2>{allPokemon.attack}</h2>
            <h2>{allPokemon.defese}</h2>
            <h2>{allPokemon.height}</h2>
            <h2>{allPokemon.weight}</h2>
            <h2>{allPokemon.types}</h2>
            <h1>este es details</h1>
        </div>
    )
}
export default Details;
