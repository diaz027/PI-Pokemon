import Card from "../card/card";

const Cards = ({ newPokes }) => {
    return (
        <div>
            {newPokes.map(({ id, name, image, hp, attack, defense, height, weight, types }) => {
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