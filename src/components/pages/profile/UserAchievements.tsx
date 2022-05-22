import React from "react";
import Achievement from "../../blocks/Achievement";

function UserAchievements({ achievements }: { achievements: string[] }) {
  return (
    <>
      {achievements.map((achievementName: any) => {
        return Achievement({ type: achievementName }).render();
      })}
    </>
  );
}

export default UserAchievements;
