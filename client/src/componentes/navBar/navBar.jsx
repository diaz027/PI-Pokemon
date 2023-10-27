import { useLocation, useNavigate } from "react-router-dom"
import SearchBar from "../searchBar/searchbar";
import style from './navBar.module.css'


const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/home')
    }

    const onClikcHandler = () => {
        navigate('/form')
    }

    const onClikcHandlerBatalla = () => {
        navigate('/combate')
    }

    return (
        <div className={style.nav}>
            {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateHandler} >Home</button>}
            {location.pathname === '/home' && <SearchBar />}
            {location.pathname === '/home' && <button onClick={onClikcHandler}>CREATE</button>}
            {location.pathname === '/home' && <button onClick={onClikcHandlerBatalla}>combate</button>}
        </div>
    )
}
export default NavBar;