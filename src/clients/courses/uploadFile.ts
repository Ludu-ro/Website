import axios from "axios";
import { Course } from "../../types";

async function uploadFile(file : File): Promise<String> {

  var bodyFormData = new FormData();
  bodyFormData.append("file", file)

  const { data } = await axios.post<String>(
      `/slides/upload`, 
        bodyFormData,
    {
        headers: {
          'content-type': 'multipart/form-data'
      }
    }, 
    
  );
  return data;
}

export default uploadFile;
