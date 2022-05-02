import axios from "axios";
import { Course } from "../../types";

async function getCourse(courseId: String | undefined): Promise<Course> {
  const { data } = await axios.get<Course>(`/api/courses/${courseId}`, {
    withCredentials: false,
  });
  return data;
}

export default getCourse;
