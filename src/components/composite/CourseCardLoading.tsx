import React from "react";
import { Badge, Box, Text } from "@chakra-ui/react";

/**
 * Component used for showing a loading {@link CourseCard} component
 */
function CourseCardLoading() {
  return (
    <Box bg="secondary" color="font-primary" cursor="pointer" w="sm">
      {/* image */}
      <Box w="100%" className="loading-color" h="40" />

      <Box display="flex" flexDirection="column" gap="2" p="4">
        {/* title */}
        <Box mt="1" h="4" w="60%" className="loading-color" />

        {/* tags */}
        <Badge className="loading-color" w="10%" h="4" />

        {/* description */}
        <Text h="4" w="70%" className="loading-color" />

        <Box display="flex" gap="2" alignItems="center">
          {/* reviews */}
          <Text h="4" w="30%" className="loading-color" />
          <Box flex="1" />
          {/* xp */}
          <Badge p="1" h="4" className="loading-color" w="10%" />
        </Box>
      </Box>
    </Box>
  );
}

export default CourseCardLoading;
