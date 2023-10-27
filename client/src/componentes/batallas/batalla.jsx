// battle.js
export const calcularDanio = (pokemonAtacante, pokemonDefensor) => {
  const danoBase = 10; 
  // calculo el daño de attack - la defensa
  const dano = (pokemonAtacante.attack - pokemonDefensor.defense) + danoBase;

  // Asegur0 de que el daño mínimo sea 0
  return Math.max(0, dano);
};

export const determinarGanador = (pokemon1, pokemon2) => {
  
  const danio1 = calcularDanio(pokemon1, pokemon2);
  const danio2 = calcularDanio(pokemon2, pokemon1);

  if (danio1 > danio2) {
    return pokemon1;
  } else if (danio2 > danio1) {
    return pokemon2;
  }
}
