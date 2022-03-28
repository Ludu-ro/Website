import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { CourseCard } from "../composite";
import { Course } from "../../types/Course";

function CoursesLibrary() {
  const mockCourses: Array<Course> = [
    {
      courseId: "1",
      xpValue: 100,
      title: "The Complete Web Developer in 2020",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["PYTHON"],
      reviews: 12,
      rating: 4.5,
    },
    {
      courseId: "2",
      title: "The Complete Node.js Developer Course",
      description:
        "Learn Node.js by building real-world applications with Node, Express, MongoDB, and more!",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["JAVA"],
      reviews: 11,
      rating: 4.5,
      xpValue: 100,
    },
    {
      courseId: "3",
      title: "The Complete 2020 Web Development Bootcamp",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["JAVA", "AWS"],
      reviews: 10,
      rating: 4.5,
      xpValue: 100,
    },
    {
      courseId: "4",
      title: "The Complete 2020 Web Development Bootcamp",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["MYSQL"],
      reviews: 9,
      rating: 4.5,
      xpValue: 100,
    },
    {
      courseId: "5",
      title: "The Complete 2020 Web Development Bootcamp",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["PYTHON"],
      reviews: 8,
      rating: 4.5,
      xpValue: 100,
    },
    {
      courseId: "6",
      title: "The Complete 2020 Web Development Bootcamp",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["PYTHON"],
      reviews: 7,
      rating: 4.5,
      xpValue: 100,
    },
    {
      courseId: "7",
      title: "The Complete 2020 Web Development Bootcamp",
      description:
        "Learn web development by building modern, responsive websites",
      image: "https://miro.medium.com/proxy/1*h5UGPzaL1E4dIy_JWDrsAw.png",
      tags: ["PYTHON"],
      reviews: 6,
      rating: 4.5,
      xpValue: 100,
    },
  ];

  return (
    <Flex
      justifyContent="space-evenly"
      m="auto"
      p={["12", "4"]}
      flexWrap="wrap"
      gap="4"
    >
      {mockCourses.map((course, idx) => (
        <CourseCard course={course} />
      ))}
    </Flex>
  );
}

export default CoursesLibrary;
