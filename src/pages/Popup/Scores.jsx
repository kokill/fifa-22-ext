import React from 'react';
import dayjs from 'dayjs';
import ScoreCard from './ScoreCard';
import './Scores.css';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const convertDate = (dateStr) => {
  const t = dateStr.split('.')[0] + 'Z';
  return encodeURIComponent(t);
};
const createScoreCard = (card) => {
  return (
    <ListGroup.Item>
      <ScoreCard
        date={dayjs(card.Date).format('MMM D, h:mm A')}
        country1={card.Home.Abbreviation}
        country2={card.Away.Abbreviation}
        score1={card.Home.Score}
        score2={card.Away.Score}
      />
    </ListGroup.Item>
  );
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

  const [results, setResults] = useState([]);
  const [schedule, setSchedule] = useState([]);

  async function fetchResults() {
    const fromDate = convertDate(
      dayjs().subtract(2, 'day').startOf('day').toISOString()
    );
    const tillDate = convertDate(dayjs().endOf('day').toISOString());

    const res = await fetch(
      `https://api.fifa.com/api/v3/calendar/matches?from=${fromDate}&to=${tillDate}&language=en&idSeason=255711`
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
    console.log('Results', results);
    setResults(results);
  }

  async function fetchSchedule() {
    const fromDate = convertDate(dayjs().startOf('day').toISOString());
    const tillDate = convertDate(dayjs().endOf('day').toISOString());

    const res = await fetch(
      `https://api.fifa.com/api/v3/calendar/matches?from=${fromDate}&to=${tillDate}&language=en&idSeason=255711`
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

    console.log('Schedule', results);
    setSchedule(results);
  }

  useEffect(() => {
    fetchResults();
    // fetchSchedule();
  }, []);

  const pastMatches = results.filter((item) => item.Home.Score !== null);
  const upcomingMatches = results.filter((item) => item.Home.Score === null);

  return (
    <Tabs
      defaultActiveKey="past"
      id="fill-tab-example"
      className="mb-3 tabClass"
      fill
    >
      <Tab eventKey="past" title="Past">
        <div className="container">
          {pastMatches.map((item) => (
            <Card className="cardClass">
              <Card.Header>
                {item?.Stadium?.Name?.[0]?.Description}(
                {item?.Stadium?.CityName?.[0]?.Description})
              </Card.Header>
              <ListGroup variant="flush">{createScoreCard(item)}</ListGroup>
            </Card>
          ))}
        </div>
      </Tab>
      <Tab eventKey="profile" title="Upcoming">
        <div className="container">
          {upcomingMatches.map((item) => (
            <Card className="cardClass">
              <Card.Header>{item.IdMatch}</Card.Header>
              <ListGroup variant="flush">{createScoreCard(item)}</ListGroup>
            </Card>
          ))}
        </div>
      </Tab>
    </Tabs>
  );
};

export default Scores;
