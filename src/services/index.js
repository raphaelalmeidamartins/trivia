const getToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data.token;
};

const getQuestions = async (token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  const question = await response.json();
  const errorCode = 3;
  if (question.response_code === errorCode) {
    throw new Error(`Erro ${errorCode}: token inválido, seu token expirou.`);
  }
  return question.results;
};

export { getToken, getQuestions };
