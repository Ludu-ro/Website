import axios from "axios";
import { Module } from "../../types";

async function getModule(courseId: string, moduleId: string): Promise<Module> {
  const { data } = await axios.get<Module>(
    `/api/courses/${courseId}/module/${moduleId}`,
    {
      withCredentials: false,
    }
  );
  return data;
}

export default getModule;
