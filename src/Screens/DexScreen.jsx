import { useEffect, useState } from "react";
import axios from "axios";
import DexCard from "../components/DexCard";

const DexScreen = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  //in the open, change state, it sill change state infinitely...

  useEffect(() => {
    // this useEffect is protexting this block of code form the rerenders...
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        console.log(res.data.results);
        setAllPokemon(res.data.results);
      });
    console.log("Render");
  }, []);

  const pokedexDisplay = allPokemon.map((pokemon, index) => {
    return <DexCard pokemon={pokemon} key={`${pokemon.name} + ${index}`} />;
  });

  return (
    <div>
      <h1>PokeDex</h1>
      {pokedexDisplay}
    </div>
  );
};

export default DexScreen;
