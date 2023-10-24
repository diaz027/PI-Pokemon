import React from 'react';
import Card from "../card/card";

const Cards = ({ pokemones }) => {
    
    return (
        <div>
            {pokemones.map(({ id, name, image, hp, attack, defense, height, weight, types }) => {
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
