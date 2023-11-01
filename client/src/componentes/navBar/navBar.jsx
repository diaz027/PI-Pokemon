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

    return (
        <div className={style.nav}>
            {location.pathname !== '/home' && location.pathname !== '/' && <button className={style.boton} onClick={navigateHandler} >Home</button>}
            {location.pathname === '/home' && <SearchBar />}
            {location.pathname === '/home' && <button className={`${style.boton} ${style.createButton}`} onClick={onClikcHandler}>crear</button>}
        </div>
    )
}
export default NavBar;