export interface Teacher {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  courses?: Array<string>;
  groups?: Array<string>;
}
