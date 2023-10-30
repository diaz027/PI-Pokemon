export const calcularDanio = (pokemonAtacante, pokemonDefensor) => {
  const danoBase = 10; 
  // Calcul0 el daño de attack - la defensa, asegurándose de que el mínimo sea 0
  const dano = Math.max(pokemonAtacante.attack - pokemonDefensor.defense, 0) + danoBase;

  return dano;
};
