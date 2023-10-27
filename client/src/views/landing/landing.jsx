import {useNavigate} from 'react-router-dom'
import style from './landing.module.css'

function Init() {

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

  return (
    
    <div className={style.body}>
      <h1>bienvenidos a Pokedex</h1>
      <button className={style.boton} onClick={navigateHandler}>HOME</button>
    </div>
  );
}
export default Init;