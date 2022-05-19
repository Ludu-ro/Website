import { ModuleInput } from "./ModuleInput";

export type Tags = "PYTHON" | "JAVA" | "AWS" | "MYSQL";

export interface CourseInput {
  teacherId: string;
  title: string;
  description: string;
  difficulty: number
  xpValue: number;
  tags?: Array<Tags>;
  image: string;
  duration: number;
  modules: Array<ModuleInput>
}
