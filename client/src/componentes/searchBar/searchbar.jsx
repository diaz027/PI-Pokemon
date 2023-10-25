import { useState } from "react"
import { useDispatch } from "react-redux";
import { getPokeName, getPokemon } from "../../Redux/actions";



const SearchBar = ({setCurrentPage}) => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    
    const handleOnclick = async () => {
        const response = await dispatch(getPokeName(name));
        setName('');
        setCurrentPage(0)
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