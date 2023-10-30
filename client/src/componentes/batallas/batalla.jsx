// battle.js
export const calcularDanio = (pokemonAtacante, pokemonDefensor) => {
  const danoBase = 10; 
  // calculo el daño de attack - la defensa
  const dano = (pokemonAtacante.attack - pokemonDefensor.defense) + danoBase;

  // Asegur0 de que el daño mínimo sea 0
  return Math.max(0, dano);
};
