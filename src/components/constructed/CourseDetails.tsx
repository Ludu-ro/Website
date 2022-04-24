import { useContext, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { CourseDetailsContext, CourseDetailsActionType } from "../../hooks";
import { getCourse } from "../../clients";

import { Course } from "../../types";
import { CourseBasicDetailsCard, CourseDescriptionCard } from "../course";

interface CourseIdInterface {
    courseId: string|undefined
  }

function CourseDetails({courseId}: CourseIdInterface) {

  const { courseDetails, dispatch, isLoading } = useContext(CourseDetailsContext);

  useEffect(() => {

    getCourse(courseId).then((course: any) => {

      dispatch({ type: CourseDetailsActionType.SetCourseDetails, courseDetails: course });
    });
  }, []);


  if(!isLoading){
    return (
        <Flex alignItems="flex-start" direction="row" gap="10" w="100%" justifyContent="space-evenly">
            
            <CourseBasicDetailsCard course={courseDetails as Course}/>
            <CourseDescriptionCard course={courseDetails as Course}/>
        </Flex>
    );

  }

  else{
    return (
        <Flex alignItems="flex-start" direction="column" gap="8">
        </Flex>
    );

  }
}

export default CourseDetails;
