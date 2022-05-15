import axios from "axios";

async function getResource(resource: string): Promise<any> {
  resource = resource.replace(
    "https://courses-slides.s3.amazonaws.com",
    "/resources"
  );
  const { data } = await axios.get(resource, {
    responseType: "blob",
  });
  return data;
}

export default getResource;
