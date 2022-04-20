import React, { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CoursesContext } from "../../hooks/CourseContext";
import { ActionType } from "../../hooks/actions/CourseActions";
import { CoursesLibraryItem } from "./";

function CoursesLibrary() {
  const { courses, dispatch } = useContext(CoursesContext);

  useEffect(() => {
    dispatch({ type: ActionType.GetAllCourses });
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
