const TeamCard = ({ char }) => {
  console.log(char.stats[0].stat.name);
  // .stat.name: base_stat
  let types = char.types.map((t, i) => {
    return (
      <h5 className={`type ${t.type.name}`} key={i}>
        {t.type.name}
      </h5>
    );
  });

  let stats = char.stats.map((s, i) => {
    return (
      <p key={s}>
        {s.stat.name} {s.base_stat}
      </p>
    );
  });

  return (
    <div className="card">
      <img src={char.sprites.other["official-artwork"].front_default} alt="" />
      <h3>{char.name}</h3>
      <div className="type-container">{types}</div>
      <div>{stats}</div>
    </div>
  );
};

export default TeamCard;
