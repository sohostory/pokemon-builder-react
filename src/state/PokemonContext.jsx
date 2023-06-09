import { createContext, useReducer } from "react";

const initialState = {
  team: [],
  allPokemon: [],
};

const PokemonContext = createContext();

const PokemonContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_TEAM":
        return { ...state, team: [...state.team, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContextProvider };
export default PokemonContext;
