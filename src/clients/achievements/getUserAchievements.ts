import axios from "axios";

//returns a list of achievements name for a given user
async function getAchievements(userId: string | undefined): Promise<string> {
  const { data } = await axios.get(`/api/achievements?userId=${userId}`, {
    withCredentials: false,
  });
  return data;
}

export default getAchievements;
