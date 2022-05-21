import { QuizInput } from "./QuizInput";

export interface ModuleInput {

    title: string;
    description: string;
    xpValue: number;
    resources?: string;
    quiz?: QuizInput
  }
  