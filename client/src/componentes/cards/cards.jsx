import React from 'react';
import Card from "../card/card";
import style from './cards.module.css'

const Cards = ({ pokemones, handlePokemonSelect }) => {
    return (
        <div className={style.cards}>
            {pokemones.map(({ id, name, image, hp, attack, defense, height, weight, types }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        hp={hp}
                        attack={attack}
                        defense={defense}
                        height={height}
                        weight={weight}
                        types={types}
                        andlePokemonSelect={handlePokemonSelect} // Pasa la función para seleccionar el Pokémon
                    />
                )
            })
            }
        </div>
    )
}

export default Cards;
