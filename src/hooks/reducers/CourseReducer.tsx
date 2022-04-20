import { Course } from "../../types/Course";
import { ActionType, CourseActions } from "../actions/CourseActions";
import { CourseMap, CourseState } from "../CourseContext";

const mockCourses: Array<Course> = [
  {
    courseId: "1",
    xpValue: 100,
    title: "Ghidul complet pentru a invata Python 2020",
    description:
      "Learn web development by building modern, responsive websites",
    image:
      "https://www.educative.io/v2api/editorpage/5984239968321536/image/5203686436372480",
    tags: ["PYTHON"],
    reviews: 12,
    rating: 4.5,
  },
  {
    courseId: "2",
    title: "Java - Introducere",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, and more!",
    image:
      "https://ubiqum.com/assets/uploads/2019/07/code-coder-coding-270348.jpg",
    tags: ["JAVA"],
    reviews: 11,
    rating: 3,
    xpValue: 100,
  },
  {
    courseId: "3",
    title: "Amazon workshop cu Java si Spring",
    description:
      "Learn web development by building modern, responsive websites",
    image:
      "https://marvel-b1-cdn.bc0a.com/f00000000156946/www.jrebel.com/sites/default/files/image/2020-09/image-blog-aws-application.jpg",
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
    rating: 5,
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

const courseArrayToCourseMap = (courses: Array<Course>): CourseMap => {
  const courseMap: CourseMap = {};
  courses.forEach((course) => {
    const { tags } = course;
    tags?.forEach((tag) => {
      if (!courseMap[tag]) {
        courseMap[tag] = [];
      }
      courseMap[tag].push(course);
    });
  });
  return courseMap;
};

export const courseReducer = (
  state: CourseState,
  action: CourseActions
): CourseState => {
  switch (action.type) {
    // used when provided with a new list of courses
    case ActionType.SetCourses: {
      const { courses } = action;
      return {
        ...state,
        courses: { ...courseArrayToCourseMap(courses) },
        isLoading: false,
      };
    }

    case ActionType.GetAllCourses: {
      //todo fetch courses from server
      return {
        ...state,
        courses: { ...courseArrayToCourseMap(mockCourses) },
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
