import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import TeamScreen from "./Screens/TeamScreen";
import DexScreen from "./Screens/DexScreen";
import axios from "axios";

function App() {
  const [toggle, setToggle] = useState(false);
  const [team, setTeam] = useState([]);

  const addToTeam = (newPokemonUrl) => {
    axios.get(newPokemonUrl).then((res) => {
      setTeam([...team, res.data]);
    });
  };

  return (
    <div className="App">
      <Header />
      <Buttons setToggle={setToggle} />
      {toggle ? <TeamScreen /> : <DexScreen addToTeam={addToTeam} />}
    </div>
  );
}

export default App;
