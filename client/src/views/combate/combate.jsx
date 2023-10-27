// Combate.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../componentes/cards/cards";
import { getPokemon } from "../../Redux/actions";

// import { calcularDanio, determinarGanador } from "./battle";

const Combate = () => {
  const allpokes = useSelector((state) => state?.pokemones);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <div >
        <Cards pokemones={allpokes} />
    </div>
  );
};

export default Combate;
