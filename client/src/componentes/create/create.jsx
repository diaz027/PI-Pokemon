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
            !errors.image &&
            !errors.types &&
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
                        <label >Nombre: </label>
                        <input type="text" name="name" value={data.name} onChange={handleChange} />
                        {errors.name && <p className={style.error}>{errors.name}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >Vida: </label>
                        <input type="text" name="hp" value={data.hp} onChange={handleChange} />
                        {errors.hp && <p className={style.error}>{errors.hp}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >Ataque: </label>
                        <input type="text" name="attack" value={data.attack} onChange={handleChange} />
                        {errors.attack && <p className={style.error}>{errors.attack}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >Defensa: </label>
                        <input type="text" name="defense" value={data.defense} onChange={handleChange} />
                        {errors.defense && <p className={style.error}>{errors.defense}</p>}
                    </div>

                    <div className={style.formGroup}>
                        <label >Altura: </label>
                        <input type="text" name="height" value={data.height} onChange={handleChange} />
                        {errors.height && <p className={style.error}>{errors.height}</p>}
                    </div>


                    <div className={style.formGroup}>
                        <label >Peso: </label>
                        <input type="text" name="weight" value={data.weight} onChange={handleChange} />
                        {errors.weight && <p className={style.error}>{errors.weight}</p>}
                    </div>
                </div>


                <div className={style.column}>
                        <label >Imagen: </label>
                        <select name="image" value={data.image} onChange={handleChange}>
                            {newImgPokes.map((image) => <option key={image.id} value={image.image}>{image.image}</option>)}
                        </select>
                        {errors.image && <p className={style.error}>{errors.image}</p>}
                        {data.image && (
                            <img
                                src={data.image} 
                                alt="Imagen seleccionada"
                                className={style.selectedImage}
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
                    {errors.types && <p className={style.error}>{errors.types}</p>}

                    <button className={style.button} disabled={!dataIsValid}>CREAR</button>
                </div>
            </form >
        </div >
    )
}

export default CrearForm;