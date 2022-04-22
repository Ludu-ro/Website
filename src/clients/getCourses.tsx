import axios from "axios";
import { Course } from "../types/Course";

async function getCourses(): Promise<Array<Course>> {
  const { data } = await axios.get<Array<Course>>(`/courses`, {
    withCredentials: false,
  });
  return data;
}

export default getCourses;
