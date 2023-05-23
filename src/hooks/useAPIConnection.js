import React from 'react';
import useFootballAPI from './useFootballAPI';

const FootballTeamsSearch = () => {
  const url = 'https://api-football.com/teams';
  const { isLoading, isError, data } = useFootballAPI(url);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Erro ao carregar os dados da API</p>;
  }

  return (
    <div>
      <h2>Times Encontrados:</h2>
      <ul>
        {data &&
          data.teams.map((team) => (
            <li key={team.id}>{team.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default FootballTeamsSearch;
