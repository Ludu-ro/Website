import { Module } from "./Module";

export type Tags = "PYTHON" | "JAVA" | "AWS" | "MYSQL";

export interface Course {
  teacherId: string;
  courseId: string;
  groupId?: string;
  title: string;
  description: string;
  difficulty: number
  xpValue: number;
  tags?: Array<Tags>;

  // TODO
  image: string;
  rating: number;
  reviews: number;
  numberOfAttendees: number;
  duration: number;
  modules: Array<Module>
}
