import React from 'react';
import '../sass/components/IndividualRanking.scss';

interface IIndividualRanking {
  name: string;
  score: number;
  picture: string;
  index: number;
}

function IndividualRanking({
  name,
  score,
  picture,
  index,
}: IIndividualRanking) {
  return (
    <li className="IndividualRanking">
      <span className="rank">{index + 1}</span>
      <div className="profile">
        <img className="avatar" src={picture} alt={name} />
        <span className="name">{name}</span>
      </div>
      <span className="score">{score}</span>
    </li>
  );
}

export default IndividualRanking;
