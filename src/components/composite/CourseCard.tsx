import { Badge, Box, Text, Image } from "@chakra-ui/react";
import { Course } from "../../types/Course";
import { Stars } from "../blocks";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }: { course: Course }) {

  const navigate = useNavigate();
  const courseId = course.courseId;

  return (
    <Box onClick={() => navigate('/course/'+courseId)} bg="secondary" color="font-primary" cursor="pointer" w="sm">
      <Image
        w="100%"
        h="40"
        objectFit="cover"
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
            <Badge key={tag} color="font-secondary" bg="primary-dark">
              {tag}
            </Badge>
          ))}
        </Box>

        <Text isTruncated>{course.description}</Text>

        <Box display="flex" gap="2" alignItems="center">
          <Stars rating={course.rating || 1} />
          {course.reviews} reviews
          <Box flex="1" />
          <Badge p="1" bg="tertiary">
            {course.xpValue} xp
          </Badge>
        </Box>
      </Box>
    </Box>
  );
}

export default CourseCard;
