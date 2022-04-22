const getToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data.token;
};

const getQuestions = async (token, { amount, category, difficulty, type }) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}`;
  const selCategory = category !== '' ? `&category=${category}` : '';
  const selDifficulty = difficulty !== '' ? `&difficulty=${difficulty}` : '';
  const selType = type !== '' ? `&type=${type}` : '';

  const response = await fetch(`${endpoint}${selCategory}${selDifficulty}${selType}&token=${token}`);
  const question = await response.json();
  const errorCode = 3;
  if (question.response_code === errorCode) {
    return false;
  }
  return question.results;
};

export { getToken, getQuestions };
