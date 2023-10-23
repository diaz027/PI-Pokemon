import { Link } from 'react-router-dom';

function Card({ id, name, image, types }) {

    return (
        <div >
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <p>{types}</p>
            <img src={image} alt='' />
        </div>
    )
}
export default Card;