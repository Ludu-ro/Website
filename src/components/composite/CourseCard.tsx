import React from "react";
import { Badge, Box, Text, Image } from "@chakra-ui/react";
import { Course } from "../../types/Course";
import { Stars } from "../blocks";

function CourseCard({ course }: { course: Course }) {
  return (
    <Box
      bg="white"
      color="background"
      cursor="pointer"
      w={["2xl", "md"]}
      fontSize={["2xl", "md"]}
      borderRadius="lg"
    >
      <Image
        h="15rem"
        objectFit="cover"
        p="4"
        pb="0"
        src={course.image}
        alt={course.title}
      />

      <Box display="flex" flexDirection="column" gap="2" p="4">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {course.title}
        </Box>

        <Box display="flex" alignItems="baseline" gap="2">
          {course.tags?.map((tag) => (
            <Badge color="white" bg="background">
              {tag}
            </Badge>
          ))}
        </Box>

        <Text isTruncated>{course.description}</Text>

        <Box display="flex" gap="2" alignItems="center">
          <div>
            <Stars rating={course.rating || 1} />
          </div>
          {course.reviews} reviews
          <Box flex="1" />
          <Badge p="1" color="white" bg="primary">
            {course.xpValue} xp
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseCard;
