import quizData from "@/assets/data.json";

function getShuffledArray(initialArray: any[]) {
  const localArray = [...initialArray];

  for (let index = localArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [localArray[index], localArray[randomIndex]] = [
      localArray[randomIndex],
      localArray[index],
    ];
  }

  return localArray;
}

export function shuffledQuizData() {
  return quizData.map((question) => ({
    question_text: question.question_text,
    answers: getShuffledArray(question.answers),
  }));
}
