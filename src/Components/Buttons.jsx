const Buttons = ({ setToggle }) => {
  const goToTeam = () => setToggle(true);
  const goToDex = () => setToggle(false);

  return (
    <div className="row-container">
      <button onClick={goToDex}>Dex</button>
      <button onClick={goToTeam}>Team</button>
    </div>
  );
};

export default Buttons;
