export interface Teacher {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  courses?: Array<any>;
  groups?: Array<string>;
  role: "student" | "teacher";

  jwtToken: string;
}
