import React, { useEffect, useRef } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { CourseCard } from "../composite";
import { Course } from "../../types/Course";
import {
  faArrowLeft,
  faArrowRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CoursesLibraryItemInterface {
  tag: string;
  courses: Array<Course>;
}

function CoursesLibraryItem({ tag, courses }: CoursesLibraryItemInterface) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (!ref.current) return;
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Box position="relative">
      {/* Tag */}
      <Box
        color="font-secondary"
        pl={["0", "10"]}
        as="h2"
        fontSize="xl"
        fontWeight="bold"
      >
        {tag}
      </Box>

      <Box display={["none", "block"]}>
        {/* Left arrow */}
        <IconButton
          aria-label="left-arrow"
          bg="black"
          opacity="0.1"
          _hover={{
            opacity: "0.25",
          }}
          icon={<FontAwesomeIcon icon={faCaretLeft} />}
          onClick={() => scroll(-400)}
          position="absolute"
          left="0"
          h="92%"
          w="32"
        />

        {/* Right arrow */}
        <IconButton
          aria-label="right-arrow"
          bg="black"
          opacity="0.1"
          _hover={{
            opacity: "0.25",
          }}
          icon={<FontAwesomeIcon icon={faCaretRight} />}
          onClick={() => scroll(400)}
          position="absolute"
          right="0"
          h="92%"
          w="32"
        />
      </Box>

      {/* Courses */}
      <Box
        w="98vw"
        pl={["1", "10"]}
        overflowX="scroll"
        scrollBehavior="smooth"
        overflowY="hidden"
        whiteSpace="nowrap"
        ref={ref}
      >
        {courses.map((course: Course) => (
          <Box key={course.courseId} mr="4" display="inline-block">
            <CourseCard key={course.courseId} course={course} />
          </Box>
        ))}
      </Box>

      <Flex
        p="2"
        mt="2"
        justifyContent="space-between"
        display={["flex", "none"]}
      >
        <IconButton
          aria-label="left-arrow"
          bg="tertiary"
          color="font-primary"
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          onClick={() => scroll(-400)}
          w="30%"
        />
        <IconButton
          aria-label="right-arrow"
          bg="tertiary"
          color="font-primary"
          icon={<FontAwesomeIcon icon={faArrowRight} />}
          onClick={() => scroll(400)}
          w="30%"
        />
      </Flex>
    </Box>
  );
}

export default CoursesLibraryItem;
