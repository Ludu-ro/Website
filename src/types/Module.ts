export interface Module {

    moduleId: string;

    title: string;

    description: string;

    slides?: {
        slidesId: string;
        slidesPath: string;
        slidesFileName: string;
      };

    xpValue: number;

    homeworkId: String;

    quizId: String
}
