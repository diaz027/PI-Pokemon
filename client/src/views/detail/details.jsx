import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById, limpiarDetails,  } from "../../Redux/actions";
import style from './detail.module.css'

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allPokemon = useSelector((state) => state?.detailsPoke)

    useEffect(() => {
        dispatch(limpiarDetails())
        dispatch(getById(id));
    }, [id])

    return (
        <div className={style.detail}>
            <div className={style.detailsContainer}>
                <h2>ID:{allPokemon?.id}</h2>
                <h2>Nombre:{allPokemon?.name}</h2>
                <h2>Vida:{allPokemon?.hp}</h2>
                <h2>Ataque:{allPokemon?.attack}</h2>
                <h2>Defensa:{allPokemon?.defense}</h2>
                <h2>Altura:{allPokemon?.height}</h2>
                <h2>Peso:{allPokemon?.weight}</h2>
                <h2>Tipo:{allPokemon?.types && allPokemon?.types.join(', ')}</h2>
            </div>
            <img className={style.img} src={allPokemon.image} />
        </div>
    )
}
export default Details;
