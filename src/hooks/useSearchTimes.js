import { useState, useEffect } from 'react';

const useFootballTeamsSearch = (searchQuery) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      if (searchQuery.trim() === '') {
        return;
      }

      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://api-football.com/teams?search=${encodeURIComponent(searchQuery)}`,
          {
            headers: {
              'X-RapidAPI-Key': 'YOUR_API_KEY',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Erro ao carregar os dados da API');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, [searchQuery]);

  return { isLoading, isError, data };
};

export default useFootballTeamsSearch;
