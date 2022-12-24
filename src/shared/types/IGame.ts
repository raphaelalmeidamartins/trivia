import IQuestionObject from './IQuestionObject';

interface IGame {
  questions: IQuestionObject[];
  round: number;
  questionChosen: boolean;
  timer: number;
}

export default IGame;
