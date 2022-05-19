export interface Quiz {
  name: string;
  xp: 0;
  questions: [
    {
      answers: Array<string>;
      correctAnswer: string;
      difficulty: string;
      questionText: string;
    }
  ];
}
