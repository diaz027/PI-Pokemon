import { useState } from "react"
import { useDispatch } from "react-redux";
import { getPokeName, getPokemon } from "../../Redux/actions";
import style from './searchBar.module.css'



const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    
    const handleOnclick = async () => {
         await dispatch(getPokeName(name));
        setName('');
    }

    const handleName = (event) => {
        setName(event.target.value)
    }
    const reset = () => {
        dispatch(getPokemon())
    }

    return (
        <div>
            <input className={style.label} type="text" onChange={handleName} value={name}/>
            <button className={style.boton} onClick={handleOnclick}>🕵️</button>
            <button className={style.boton2} onClick={reset}>🗑️</button>
        </div>
    )
}
export default SearchBar;