import { Link } from 'react-router-dom';
import style from './card.module.css'

function Card({ id, name, image, types}) {

 
    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>Tipos: {types}</p>
            <img className={style.img} src={image} />
        </div>
    )
}
export default Card;