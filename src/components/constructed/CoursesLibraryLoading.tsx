import React, { useContext, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { CourseCardLoading } from "../composite";

/**
 * Component used for showing a loading {@link CoursesLibrary} component
 */
function CoursesLibraryLoading() {
  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      {[1, 2].map((idx) => (
        <Box
          w="100vw"
          pl={["0", "5"]}
          overflowX="scroll"
          scrollBehavior="smooth"
          overflowY="hidden"
          whiteSpace="nowrap"
          key={"course-library-loading-" + idx}
        >
          <Box mb="2" h="6" w="10%" className="loading-color" />

          {Array(4)
            .fill("")
            .map((_, idx) => (
              <Box key={"loading-course-" + idx} mr="4" display="inline-block">
                <CourseCardLoading />
              </Box>
            ))}
        </Box>
      ))}
    </Flex>
  );
}

export default CoursesLibraryLoading;
