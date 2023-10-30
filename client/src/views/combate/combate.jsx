// Combate.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { calcularDanio } from "../../componentes/batallas/batalla";
import { useSelector } from "react-redux";
import style from './combate.module.css'


const Combate = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokemon1Id = searchParams.get('pokemon1');
  const pokemon2Id = searchParams.get('pokemon2');
  const allpokes = useSelector((state) => state?.pokemones);
  const pokemon1 = allpokes.find((pokemon) => pokemon.id === pokemon1Id);
  const pokemon2 = allpokes.find((pokemon) => pokemon.id === pokemon2Id);
  const [peleaEnCurso, setPeleaEnCurso] = useState(false);
  const [ganador, setGanador] = useState(null);
  const [pokemon1HP, setPokemon1HP] = useState(150); // defino la vida inicial de poke 1
  const [pokemon2HP, setPokemon2HP] = useState(150); // Defino la vida inicial de Poke 2



  const handleAttack = () => {
    // Calcula el daño de los ataques y actualiza la vida de los Pokémon
    const danio1 = calcularDanio(pokemon1, pokemon2);
    const danio2 = calcularDanio(pokemon2, pokemon1);
    const nuevoPokemon1HP = Math.max(pokemon1HP - danio2, 0);
    const nuevoPokemon2HP = Math.max(pokemon2HP - danio1, 0);
    setPokemon1HP(nuevoPokemon1HP);
    setPokemon2HP(nuevoPokemon2HP);

    // Verifica si uno de los Pokémon se queda sin vida
    if (nuevoPokemon1HP <= 0 || nuevoPokemon2HP <= 0) {
      setPeleaEnCurso(false);
      if (nuevoPokemon1HP <= 0) {
        setGanador(pokemon2);
      } else if (nuevoPokemon2HP <= 0) {
        setGanador(pokemon1);
      }
    }
  };


  return (
    <div className={style.body}>
      <div className={style.combateContainer}>
        <div className={`${style.poke1Container} ${peleaEnCurso ? style.attackAnimation : ""}`}>
          <div className={style.poke1}>
            <p>Pokemon 1: {pokemon1?.name}</p>
            <img src={pokemon1?.image} alt={pokemon1?.name} />
            {peleaEnCurso && (
              <div className={style.lifeBar}>
                <div
                  className={style.lifeProgress}
                  style={{ width: `${(pokemon1HP / 150) * 100}%` }}
                ></div>
              </div>
            )}
            <p>Ataque: {pokemon1?.attack}</p>
            <p>Defensa: {pokemon1?.defense}</p>
          </div>
        </div>

        <div className={style.poke2Container}>
          <div className={style.poke2}>
            <p>Pokemon 2: {pokemon2?.name}</p>
            <img src={pokemon2?.image} alt={pokemon2?.name} />
            {peleaEnCurso && (
              <div className={style.lifeBar}>
                <div
                  className={style.lifeProgress}
                  style={{ width: `${(pokemon2HP / 150) * 100}%` }}
                ></div>
              </div>
            )}
            <p>Ataque: {pokemon2?.attack}</p>
            <p>Defensa: {pokemon2?.defense}</p>
          </div>
        </div>

        {!peleaEnCurso && ganador && (
          <div className={style.ganadorContainer}>
            <img className={style.ganadorImage} src={ganador?.image} alt={ganador?.name} />
            <p>Ganador: {ganador?.name}</p>
          </div>
        )}

        <button onClick={() => setPeleaEnCurso(true)}>Iniciar pelea</button>
        <button onClick={handleAttack}>Atacar</button>
      </div>
    </div>
  );
}
export default Combate;
