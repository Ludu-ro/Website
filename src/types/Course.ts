export type Tags = "PYTHON" | "JAVA" | "AWS" | "MYSQL";

export interface Course {
  teacherId: string;
  courseId: string;
  groupId?: string;
  title: string;
  description: string;
  xpValue: number;
  homeworkId?: string;
  quizId?: string;
  slides?: {
    slidesId: string;
    slidesPath: string;
    slidesFileName: string;
  };
  tags?: Array<Tags>;

  // TODO
  image: string;
  rating: number;
  reviews: number;
}
