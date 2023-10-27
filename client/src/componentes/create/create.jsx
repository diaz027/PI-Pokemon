import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, newImagenes } from "../../Redux/actions";
import validacion from "./validacion";
import style from "./create.module.css"

const CrearForm = () => {
    const allTypesPoke = useSelector((state) => state?.newTypes)
    const newImgPokes = useSelector((state) => state?.allImg)
    const dispatch = useDispatch();
    const [errors, setErros] = useState({});
    const [dataIsValid, setDataIsValid] = useState(false)
    const [data, setData] = useState({
        name: '',
        image: '',
        hp: '',
        attack: '',
        defense: '',
        height: '',
        weight: '',
        types: []

    })
    console.log(data);
    const handleChange = (event) => {
        if (event.target.name === 'types') return setData({
            ...data,
            types: [...data.types, event.target.value]

        })
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
        return (
            !errors.name &&
            !errors.attack &&
            !errors.defense &&
            !errors.height &&
            !errors.weight &&
            !errors.hp
        );
    };

    useEffect(() => {
        setDataIsValid(validateData());
    }, [errors]);



    useEffect(() => {
        dispatch(newImagenes());
    }, [dispatch]);


    const handleSubmit = (event) => {
        event.preventDefault();
        if (dataIsValid) {
            dispatch(createPokemon(data))
        }
    }


    return (
        <div className={style.body}>
            <form onSubmit={handleSubmit}>
                <div className={style.column}>

                    <div className={style.formGroup}>
                        <label >Nombre</label>
                        <input type="text" name="name" value={data.name} onChange={handleChange} />
                        {errors.name && <p style={{ color: 'black', fontSize: '13px' }}>{errors.name}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >vida</label>
                        <input type="text" name="hp" value={data.hp} onChange={handleChange} />
                        {errors.hp && <p style={{ color: 'black', fontSize: '13px' }}>{errors.hp}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >ataque</label>
                        <input type="text" name="attack" value={data.attack} onChange={handleChange} />
                        {errors.attack && <p style={{ color: 'black', fontSize: '13px' }}>{errors.attack}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >defensa</label>
                        <input type="text" name="defense" value={data.defense} onChange={handleChange} />
                        {errors.defense && <p style={{ color: 'black', fontSize: '13px' }}>{errors.defense}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >altura</label>
                        <input type="text" name="height" value={data.height} onChange={handleChange} />
                        {errors.height && <p style={{ color: 'black', fontSize: '13px' }}>{errors.height}</p>}
                    </div>


                    <div className={style.formGroup}>
                        <label >peso</label>
                        <input type="text" name="weight" value={data.weight} onChange={handleChange} />
                        {errors.weight && <p style={{ color: 'black', fontSize: '13px' }}>{errors.weight}</p>}
                    </div>
                </div>


                <div className={style.column}>
                        <label >imagen</label>
                        <select name="image" value={data.image} onChange={handleChange}>
                            {newImgPokes.map((image) => <option key={image.id} value={image.image}>{image.image}</option>)}
                        </select>
                        {data.image && (
                            <img
                                src={data.image} // Utiliza la URL almacenada en la base de datos
                                alt="Imagen seleccionada"
                                width="100"
                                height="100"
                            />
                        )}

                    <div className={style.formGroup}>
                        <label>Tipos:
                            <select multiple
                                name="types"
                                value={data.types}
                                onChange={handleChange}>
                                {allTypesPoke.map(types => <option name={types.name} key={types.key} value={types.name}>{types.name}</option>)}
                            </select>
                        </label>
                    </div>

                    <button disabled={!dataIsValid}>CREAR</button>
                </div>
            </form >
        </div >
    )
}

export default CrearForm;