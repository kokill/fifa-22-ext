import React from 'react';
import ScoreCard from './ScoreCard';
import { useEffect, useState } from 'react';

const createScoreCard = (card) => {
  if (true) {
    return (
      <ScoreCard
        country1={card.Home.IdCountry}
        country2={card.Away.IdCountry}
        score1={card.Home.Score}
        score2={card.Away.Score}
      />
    );
  }
};

const Scores = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const from = new Date();
    const to = new Date();
    from.setDate(from.getDate() - 1);
    const startDate = '2022-' + (from.getMonth() + 1) + '-' + from.getDate();
    const endDate = '2022-' + (to.getMonth() + 1) + '-' + to.getDate();

    const res = await fetch(
      `https://api.fifa.com/api/v3/calendar/matches?from=${startDate}T00%3A00%3A00Z&to=${endDate}T23%3A59%3A59Z&language=en&idSeason=255711`
    );
    const json = await res.json();
    const results = json.Results;
    setData(results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data.map(createScoreCard)}</div>;
};

export default Scores;
