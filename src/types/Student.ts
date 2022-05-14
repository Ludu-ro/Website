export interface Student {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  xp?: number;
  level?: number;
  groups?: Array<string>;
  role: "student" | "teacher";

  jwtToken: string;
}
