import React, { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CoursesContext, CourseActionType } from "../../hooks";
import { CoursesLibraryItem } from "./";
import { getCourses } from "../../clients";
import CoursesLibraryLoading from "./CoursesLibraryLoading";

function CoursesLibrary() {
  const { courses, dispatch, isLoading } = useContext(CoursesContext);
  console.log(courses);
  useEffect(() => {
    getCourses().then((courses) => {
      dispatch({ type: CourseActionType.SetCourses, courses });
    });
  }, []);

  if (isLoading) {
    return (
      <Flex alignItems="flex-start" direction="column" gap="8">
        <CoursesLibraryLoading />
      </Flex>
    );
  }

  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      {Object.entries(courses).map(([tag, courses]) => (
        <CoursesLibraryItem tag={tag} courses={courses} key={tag} />
      ))}
    </Flex>
  );
}

export default CoursesLibrary;
