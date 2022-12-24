import IGame from './IGame';
import IPlayer from './IPlayer';
import IRanking from './IRanking';
import ISettings from './ISettings';

interface IStore {
  token: string;
  game: IGame;
  player: IPlayer;
  ranking: IRanking;
  settings: ISettings;
}

export default IStore;
