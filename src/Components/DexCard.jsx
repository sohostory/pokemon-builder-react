import { useContext } from "react";
import PokemonContext from "../state/PokemonContext";
import axios from "axios";

const DexCard = ({ pokemon }) => {
  const { dispatch } = useContext(PokemonContext);

  const addToTeam = (newPokemonUrl) => {
    axios.get(newPokemonUrl).then((res) => {
      dispatch({ type: "ADD_TO_TEAM", payload: res.data });
    });
  };

  return (
    <div className="card">
      <h4>{pokemon.name}</h4>
      <button onClick={() => addToTeam(pokemon.url)}>Add</button>
    </div>
  );
};

export default DexCard;
