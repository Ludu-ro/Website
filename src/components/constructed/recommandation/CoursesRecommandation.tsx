import { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CoursesRecommandationContext, CourseRecommandationActionType, UserContext } from "../../../hooks";
import { getCourseRecommandation } from "../../../clients";
import CoursesRecommandationLoading from "./CoursesRecommandationLoading";
import CoursesRecommandationItem from "./CoursesRecommandationItem";

function CoursesRecommandation() {
const { courses, dispatch, isLoading } = useContext(CoursesRecommandationContext);
const { user } = useContext(UserContext)

  useEffect(() => {
    getCourseRecommandation(user?.id, localStorage.getItem("jwt")).then((courses) => {
      dispatch({ type: CourseRecommandationActionType.SetCourses, courses });
    });
  }, []);

  if (isLoading) {
    return (
        <Flex alignItems="flex-start" direction="column" gap="8">
          <CoursesRecommandationLoading />
        </Flex>
      );
  }

  if (courses.length == 0) return <></>
  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      <CoursesRecommandationItem courses={courses} />
    </Flex>
  );
}

export default CoursesRecommandation;
