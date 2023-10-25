import { Link } from 'react-router-dom';

function Card({ id, name, image, types}) {

 
    return (
        <div >
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>Tipos: {types}</p>
            <img src={image} />
        </div>
    )
}
export default Card;