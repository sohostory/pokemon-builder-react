import { useEffect, useState } from "react";
import axios from "axios";
import DexCard from "../Components/DexCard";

const DexScreen = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        console.log(res.data);
        setAllPokemon(res.data.results);
      });

    console.log("Render");
  }, []);

  const pokedexDisplay = allPokemon.map((pokemon, index) => {
    return <DexCard pokemon={pokemon} key={`${pokemon.name}+${index}`} />;
  });

  return (
    <div>
      <h1>PokeDex</h1>
      {pokedexDisplay}
    </div>
  );
};

export default DexScreen;
