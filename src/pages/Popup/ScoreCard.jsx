import React from 'react';
import './ScoreCard.css';

const ScoreCard = (props) => {
  return (
    <div>
      <span className="date">{props.date}</span>
      <div>
        <div className="f left">
          {props.country1}
          &nbsp;&nbsp;&nbsp;
          <img
            className="logo"
            alt=""
            src={
              'https://cloudinary.fifa.com/api/v3/picture/flags-sq-3/' +
              props.country1
            }
          />
        </div>
        <div className="f vs">vs</div>
        <div className="f right">
          <img
            className="logo"
            alt=""
            src={
              'https://cloudinary.fifa.com/api/v3/picture/flags-sq-3/' +
              props.country2
            }
          />
          &nbsp;&nbsp;&nbsp;
          {props.country2}
        </div>
      </div>
      <div className="scoreNumbers">
        <div className="f">{props.score1}</div>
        <div className="f vs">{props.score1 == null ? '' : '-'}</div>
        <div className="f">{props.score2}</div>
      </div>
    </div>
  );
};

export default ScoreCard;
