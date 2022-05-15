import { ModuleStatus } from ".";

export interface Student {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  xp?: number;
  level?: number;
  groups?: Array<string>;
  courses?: Array<ModuleStatus>;
  role: "student" | "teacher";

  jwtToken: string;
}
