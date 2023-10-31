import { Link } from 'react-router-dom';
import style from './card.module.css'

function Card({ id, name, image, types, handlePokemonSelect }) {

 
    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
                <img className={style.img} src={image} />
            <p>Tipos: {types}</p>
            </Link>
            <button className={style.boton} onClick={() => handlePokemonSelect({ id, name, image, types })}>Seleccionar</button>
            
        </div>
    )
}
export default Card;