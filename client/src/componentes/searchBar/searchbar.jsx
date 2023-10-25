import { useState } from "react"
import { useDispatch } from "react-redux";
import { getPokeName, getPokemon } from "../../Redux/actions";



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
            <input type="text" onChange={handleName} value={name}/>
            <button onClick={handleOnclick}>Buscar</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default SearchBar;