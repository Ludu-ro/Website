import React, { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CoursesContext } from "../../hooks/CourseContext";
import { ActionType } from "../../hooks/actions/CourseActions";
import { CoursesLibraryItem } from "./";
import { getCourses } from "../../clients";

function CoursesLibrary() {
  const { courses, dispatch } = useContext(CoursesContext);

  useEffect(() => {
    getCourses().then((courses) => {
      console.log(courses);
      dispatch({ type: ActionType.SetCourses, courses });
    });
  }, []);

  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      {Object.entries(courses).map(([tag, courses]) => (
        <CoursesLibraryItem tag={tag} courses={courses} key={tag} />
      ))}
    </Flex>
  );
}

export default CoursesLibrary;
