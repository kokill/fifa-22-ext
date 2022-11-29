import React from 'react';
import './ScoreCard.css';

const ScoreCard = (props) => {
  return (
    <div className="lp">
      <div className="names">
        <div className="f left">{props.country1}</div>
        <div className="f vs">vs</div>
        <div className="f right">{props.country2}</div>
      </div>
      <div className="flags">
        <div className="f">
          <img
            className="logo"
            alt=""
            src={
              'https://cloudinary.fifa.com/api/v3/picture/flags-sq-3/' +
              props.country1
            }
          />
        </div>
        <div className="f vs"></div>
        <div className="f">
          <img
            className="logo"
            alt=""
            src={
              'https://cloudinary.fifa.com/api/v3/picture/flags-sq-3/' +
              props.country2
            }
          />
        </div>
      </div>
      <div className="scoreNumbers">
        <div className="f">{props.score1}</div>
        <div className="f vs">-</div>
        <div className="f">{props.score2}</div>
      </div>
    </div>
  );
};

export default ScoreCard;
