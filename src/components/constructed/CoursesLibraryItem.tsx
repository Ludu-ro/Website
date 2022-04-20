import React, { useContext, useEffect, useRef } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { CourseCard } from "../composite";
import { Course } from "../../types/Course";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        pl="10"
        as="h2"
        fontSize="xl"
        fontWeight="bold"
      >
        {tag}
      </Box>

      {/* Left arrow */}
      <IconButton
        aria-label="left-arrow"
        bg="black"
        opacity="0"
        _hover={{
          opacity: "0.25",
        }}
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        onClick={() => scroll(-200)}
        position="absolute"
        left="0"
        h="92%"
        w="32"
      />

      {/* Right arrow */}
      <IconButton
        aria-label="right-arrow"
        bg="black"
        opacity="0"
        _hover={{
          opacity: "0.25",
        }}
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        onClick={() => scroll(200)}
        position="absolute"
        right="0"
        h="92%"
        w="32"
      />

      {/* Courses */}
      <Box
        w="100vw"
        pl="10"
        overflowX="scroll"
        scrollBehavior="smooth"
        overflowY="hidden"
        whiteSpace="nowrap"
        ref={ref}
      >
        {courses.map((course: Course) => (
          <Box mr="4" display="inline-block">
            <CourseCard key={course.courseId} course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CoursesLibraryItem;
