import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validacion from "./validacion";
import { createPokemon } from "../../Redux/actions";


const CrearForm = () => {
    const allTypes = useSelector((state) => state?.newtypes)
    const dispatch = useDispatch();
    const [errors, setErros] = useState({});
    const [dataIsValid, setDataIsValid] = useState(false)
    const [data, setData] = useState({
        name: '',
        image: '',
        hp: '',
        attack:'',
        defense:'',
        height:'',
        weight:'',
        types: []

    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
        setErros(
            validacion({
               ...data,
               [event.target.name]: event.target.value
            })
        )
    };


    const validateData = () => {
        return(
            !errors.name &&
            !errors.attack&&
            !errors.defense&&
            !errors.height &&
            !errors.weight &&
            !errors.hp
        );
    };

    useEffect(() => {
        setDataIsValid(validateData());
    }, [errors]);

    useEffect(() => {
        dispatch(allTypes());
      }, []);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(dataIsValid){
            dispatch(createPokemon(data))}
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label >Nombre</label>
                <input type="text" name="name" value={data.name} onChange={handleChange}/>
                {errors.name && <p style={{ color: 'black', fontSize: '13px' }}>{errors.name}</p>}

                <label >imagen</label>
                <input type="text" name="image" value={data.image} onChange={handleChange}/>

                <label >vida</label>
                <input type="text" name="hp" value={data.hp} onChange={handleChange}/>
                {errors.hp && <p style={{ color: 'black', fontSize: '13px' }}>{errors.hp}</p>}

                <label >ataque</label>
                <input type="text" name="attack" value={data.attack} onChange={handleChange}/>
                {errors.attack && <p style={{ color: 'black', fontSize: '13px' }}>{errors.attack}</p>}

                <label >defensa</label>
                <input type="text" name="defense" value={data.defense} onChange={handleChange}/>
                {errors.defense && <p style={{ color: 'black', fontSize: '13px' }}>{errors.defense}</p>}

                <label >altura</label>
                <input type="text" name="height" value={data.height} onChange={handleChange}/>
                {errors.height && <p style={{ color: 'black', fontSize: '13px' }}>{errors.height}</p>}

                <label >peso</label>
                <input type="text" name="weight" value={data.weight} onChange={handleChange}/>
                {errors.weight && <p style={{ color: 'black', fontSize: '13px' }}>{errors.weight}</p>}

                <select
                name="types"
                value={data.types}
                onChange={handleChange}>
                    {allTypes.map(elem => <option name={elem.name} key={elem.key} value={elem.name}>{elem.name}</option>)}
                </select>

                <button disabled={!dataIsValid}>CREAR</button>

            </form>
        </div>
    )
}

export default CrearForm;