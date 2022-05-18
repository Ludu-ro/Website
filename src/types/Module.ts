import { Quiz } from "./Quiz";

export interface Module {
  moduleId: string;
  title: string;
  description: string;
  xpValue: number;
  resources?: string;
  homeworkId?: string;
  quiz?: Quiz;
}
