import { Link } from 'react-router-dom';

function Card({ id, name, image, types, height}) {

 
    return (
        <div >
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>{height}</p>
            <p>Tipos: {types.join(', ')}</p>
            <img src={image} />
        </div>
    )
}
export default Card;