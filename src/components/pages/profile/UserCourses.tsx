// import React from 'react'
import { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { getCourse } from "../../../clients";
import { UserContext, UserCourseActionType, UserCourseContext } from "../../../hooks";
import { UserCourseItem, UserCourseLoading } from "../../constructed";
import { Course } from "../../../types";

function UserCourses() {
  const { user } = useContext(UserContext);
  const { courses, dispatch, isLoading } = useContext(UserCourseContext);

  useEffect(() => {
      var newCourses: Array<Course> = [];
      var itemsProcessed = 0;
      // if there are no started courses
      if (user?.groups?.length === 0) {
        dispatch({ type: UserCourseActionType.SetCourses, courses: courses.concat(newCourses) });
      }

      user?.groups?.forEach(courseId => {
        getCourse(courseId).then((course) => {
            itemsProcessed++;
            if (!courses.includes(course)) {
                newCourses.push(course);
            }
            // if it proccesed all courses from user
            if (itemsProcessed === user.groups?.length){
                dispatch({ type: UserCourseActionType.SetCourses, courses: courses.concat(newCourses) });
            }
          })
          .catch(() => {
            itemsProcessed++;
              //ignore error - nothing
          });
      })
  }, []);

  if (user?.role === "teacher")
    return <div>Courses you created</div>

  if (isLoading) {
      return (
        <Flex alignItems="flex-start" direction="column" gap="8">
          <UserCourseLoading />
        </Flex>
      );
  }
  if (courses.length === 0) return <></>
  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      <UserCourseItem courses={courses} />
    </Flex>
  );
}

export default UserCourses;
