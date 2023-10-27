import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../Redux/actions";
import style from './detail.module.css'

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allPokemon = useSelector((state) => state?.detailsPoke)

    useEffect(() =>{
        dispatch(getById(id));
    }, [id])

    return (
        <div className={style.detail}>
            <h2>nombre:{allPokemon?.name}</h2>
            <h2>vida:{allPokemon?.hp}</h2>
            <h2>ataque:{allPokemon?.attack}</h2>
            <h2>defensa:{allPokemon?.defense}</h2>
            <h2>altura:{allPokemon?.height}</h2>
            <h2>peso:{allPokemon?.weight}</h2>
            <h2>tipo:{allPokemon?.types}</h2>
            <img src={allPokemon.image}/>
        </div>
    )
}
export default Details;
