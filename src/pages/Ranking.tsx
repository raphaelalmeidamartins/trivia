import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import rankingPic from '../assets/images/podium.png';
import wave from '../assets/images/wave.svg';
import HomeButton from '../components/HomeButton';
import IndividualRanking from '../components/IndividualRanking';
import { getRanking } from '../redux/reducers/ranking';
import '../sass/pages/Ranking.scss';
import IStore from '../shared/types/IStore';

interface IRanking {
  history: {
    push: Function;
  };
}

function Ranking({ history }: IRanking) {
  const dispatch = useDispatch();
  const ranking = useSelector((state: IStore) => state.ranking);

  useEffect(() => {
    dispatch(getRanking());
  }, []);

  return (
    <div className="Ranking-container">
      <img className="Ranking-picture" src={rankingPic} alt="Ranking" />
      <section className="Ranking">
        <h1>Ranking</h1>
        {ranking.length === 0 && (
          <p className="Ranking-noranking">There are no records yet</p>
        )}
        {ranking.length !== 0 && (
          <ol>
            {[...ranking]
              .sort((prev, curr) => curr.score - prev.score)
              .map((record, index) => (
                <IndividualRanking
                  key={record.id}
                  index={index}
                  name={record.name}
                  score={record.score}
                  picture={record.picture}
                />
              ))}
          </ol>
        )}
        <HomeButton history={history} />
      </section>
      <img className="Login-wave" src={wave} alt="" />
      <img className="Login-wave-upsidedown" src={wave} alt="" />
    </div>
  );
}

export default Ranking;
