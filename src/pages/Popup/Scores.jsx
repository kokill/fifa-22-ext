import React from 'react';
import ScoreCard from './ScoreCard';
import './Scores.css';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const createScoreCardsPast = (card) => {
  if (card.homeScore) {
    let d = new Date(card.date.split('T')[0]).toDateString();
    d = d.substring(0, 3) + ',' + d.substring(3);
    return (
      <ListGroup.Item>
        <ScoreCard
          date={d}
          country1={card.home}
          country2={card.away}
          score1={card.homeScore}
          score2={card.awayScore}
        />
      </ListGroup.Item>
    );
  }
};

const createScoreCardsUpcoming = (card) => {
  if (card.homeScore == null) {
    let d = new Date(card.date.split('T')[0]).toDateString();
    d = d.substring(0, 3) + ',' + d.substring(3);
    return (
      <ListGroup.Item>
        <ScoreCard
          date={d}
          country1={card.home}
          country2={card.away}
          score1={card.homeScore}
          score2={card.awayScore}
        />
      </ListGroup.Item>
    );
  }
};

const Scores = () => {
  let hm = new Map();
  hm.set('', [
    {
      date: '',
      home: '',
      homeScore: '',
      away: '',
      awayScore: '',
    },
  ]);
  const [data, setData] = useState([[], hm]);

  async function fetchData() {
    const from = new Date();
    const to = new Date();
    from.setDate(from.getDate() - 1);
    const beginning = '2022-11-20';
    const conclusion = '2022-12-02';
    const startDate = '2022-' + (from.getMonth() + 1) + '-' + from.getDate();
    const currDate = '2022-' + (to.getMonth() + 1) + '-' + to.getDate();

    const res = await fetch(
      `https://api.fifa.com/api/v3/calendar/matches?from=${beginning}T00%3A00%3A00Z&to=${conclusion}T23%3A59%3A59Z&language=en&idSeason=255711`
    );
    const json = await res.json();
    const results = json.Results;
    const groups = new Map();
    results.map((ele) => {
      const g = ele.GroupName[0].Description;
      if (groups.get(g) == null) {
        groups.set(g, []);
      }
      groups.get(g).push({
        date: ele.Date,
        home: ele.Home.Abbreviation,
        homeScore: ele.Home.Score,
        away: ele.Away.Abbreviation,
        awayScore: ele.Away.Score,
      });
    });

    console.log(groups);
    setData([results, groups]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const groups2 = data[1];
  const pastCards = [];
  const upcomingCards = [];

  groups2.forEach((val, key) => {
    pastCards.push(
      <Card className="cardClass">
        <Card.Header>{key}</Card.Header>
        <ListGroup variant="flush">{val.map(createScoreCardsPast)}</ListGroup>
      </Card>
    );
  });

  groups2.forEach((val, key) => {
    if (groups2.get(key).length > 0) {
      upcomingCards.push(
        <Card className="cardClass">
          <Card.Header>{key}</Card.Header>
          <ListGroup variant="flush">
            {val.map(createScoreCardsUpcoming)}
          </ListGroup>
        </Card>
      );
    }
  });

  return (
    <Tabs
      defaultActiveKey="past"
      id="fill-tab-example"
      className="mb-3 tabClass"
      fill
    >
      <Tab eventKey="past" title="Past">
        <div className="container">{pastCards}</div>
      </Tab>
      <Tab eventKey="profile" title="Upcoming">
        <div className="container">{upcomingCards}</div>
      </Tab>
    </Tabs>
  );
};

export default Scores;
