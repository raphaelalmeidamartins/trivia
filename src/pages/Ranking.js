import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import rankingPic from '../assets/imgs/podium.png';
import wave from '../assets/imgs/wave.svg';
import HomeButton from '../components/HomeButton';
import IndividualRanking from '../components/IndividualRanking';
import { actionGetRanking } from '../redux/actions';
import '../sass/pages/Ranking.css';

class Ranking extends Component {
  componentDidMount() {
    const { getRanking } = this.props;
    getRanking();
  }

  render() {
    const { ranking, history } = this.props;
    return (
      <div className="Ranking-container">
        <img className="Ranking-picture" src={ rankingPic } alt="Ranking" />
        <section className="Ranking">
          <h1 data-testid="ranking-title">Ranking</h1>
          {ranking.length === 0 && (
            <p className="Ranking-noranking">There are no records yet</p>
          )}
          {ranking.length !== 0 && (
            <ol>
              {ranking
                .sort((prev, curr) => curr.score - prev.score)
                .map((record, index) => (
                  <IndividualRanking key={ index } index={ index } { ...record } />
                ))}
            </ol>
          )}
          <HomeButton history={ history } />
        </section>
        <img className="Login-wave" src={ wave } alt="" />
        <img className="Login-wave-upsidedown" src={ wave } alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ranking: state.ranking,
});

const mapDispatchToProps = (dispatch) => ({
  getRanking: () => dispatch(actionGetRanking()),
});

Ranking.propTypes = {
  getRanking: PropTypes.func,
  ranking: PropTypes.arrayOf(PropTypes.any),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
