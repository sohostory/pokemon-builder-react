import TeamCard from "../components/TeamCard";
import { useContext } from "react";
import PokemonContext from "../state/PokemonContext";

const TeamScreen = () => {
  const { state } = useContext(PokemonContext);

  let teamDisplay = state.team.map((char, index) => {
    return <TeamCard char={char} key={index} />;
  });

  return (
    <div>
      <h1>My Team</h1>
      {teamDisplay}
    </div>
  );
};

export default TeamScreen;
