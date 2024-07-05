export const getRandomQuestions = (questions, numQuestions) => {
  console.log("Questions array:", questions); // Debugging line
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
};

export const sanitizeAnswer = (answer) => {
  return answer.trim().toLowerCase();
};
