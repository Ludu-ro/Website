import { Student } from "./Student";
import { Teacher } from "./Teacher";

export type User = Partial<Student | Teacher>;
