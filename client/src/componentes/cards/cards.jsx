import React from 'react';
// import { v4 as uuidv4 } from 'uuid'; // Importa la función uuid
import Card from "../card/card";

const Cards = ({ pokemones }) => {
    
    return (
        <div>
            {pokemones.map(({ id, name, image, hp, attack, defense, height, weight, types }) => {
                // const uniqueKey = uuidv4();//generar una clave única para cada elemento en lugar de depender de las propiedades id
                console.log(pokemones);
                console.log(id)
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
                    />
                )
            })
            }
        </div>
    )
}

export default Cards;
