import axios from "axios";

async function addAchievement(
  userId: string | undefined,
  achievementName: string
): Promise<void> {
  await axios.post(
    `/api/achievements`,
    {
      name: achievementName,
      userId: userId,
    },
    {
      withCredentials: false,
    }
  );
}

export default addAchievement;
