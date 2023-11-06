import {useNavigate} from 'react-router-dom'
import style from './landing.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPokemon } from '../../Redux/actions'

function Init() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemon())
  })

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

  return (
    
    <div className={style.body}>
      <h1>BIENVENIDOS A POKEDEX</h1>
      <button className={style.boton} onClick={navigateHandler}>Ingresar</button>
    </div>
  );
}
export default Init;