import axios from "axios";
import { Course } from "../../types";

async function getCourseRecommandation(): Promise<Array<Course>> {
  const { data } = await axios.get<Array<Course>>(`/api/courses`, {
    withCredentials: false,
  });
  return data;
}

export default getCourseRecommandation;
