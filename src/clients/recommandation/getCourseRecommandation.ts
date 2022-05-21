import axios from "axios";
import { Course } from "../../types";

async function getCourseRecommandation(userid: string | undefined, token: string | null): Promise<Array<Course>> {
  const { data } = await axios.get<Array<Course>>(`/api/assistant/users/${userid}/recommend/courses?token=${token}`, {
    withCredentials: false,
  });
  return data;
}

export default getCourseRecommandation;
