export interface ModuleInput {

    title: string;
    description: string;
    xpValue: number;
    resources?: string;
    quiz?: {
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
    };
  }
  