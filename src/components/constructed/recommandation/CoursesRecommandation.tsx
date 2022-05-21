import { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CoursesRecommandationContext, CourseRecommandationActionType } from "../../../hooks";
import { getCourseRecommandation } from "../../../clients";
import CoursesRecommandationLoading from "./CoursesRecommandationLoading";
import CoursesRecommandationItem from "./CoursesRecommandationItem";

function CoursesRecommandation() {
const { courses, dispatch, isLoading } = useContext(CoursesRecommandationContext);

  useEffect(() => {
    getCourseRecommandation().then((courses) => {
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

  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      <CoursesRecommandationItem courses={courses} />
    </Flex>
  );
}

export default CoursesRecommandation;
