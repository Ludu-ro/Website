import axios from "axios";
import { Course } from "../../types";

async function getCourses(): Promise<Array<Course>> {
  const { data } = await axios.get<Array<Course>>(`/api/courses`, {
    withCredentials: false,
  });
  return data;
}

export default getCourses;
