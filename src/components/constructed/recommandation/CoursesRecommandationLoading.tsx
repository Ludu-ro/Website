import { Box, Flex } from "@chakra-ui/react";
import { CourseCardLoading } from "../../composite";

/**
 * Component used for showing a loading {@link CoursesRecommandation} component
 */
function CoursesRecommandationLoading() {
  return (
    <Flex alignItems="flex-start" direction="column" gap="8">
      {[1].map((idx) => (
        <Box
          w="100vw"
          pl={["0", "5"]}
          overflowX="scroll"
          scrollBehavior="smooth"
          overflowY="hidden"
          whiteSpace="nowrap"
          key={"course-library-loading-" + idx}
        >
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

export default CoursesRecommandationLoading;
