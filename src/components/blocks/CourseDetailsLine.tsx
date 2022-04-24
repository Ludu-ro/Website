import { Box, Button, Flex } from "@chakra-ui/react";
import { TimeIcon, PhoneIcon } from '@chakra-ui/icons'
import React, { ReactNode } from "react";
import { Course } from "../../types";

interface CourseDetailsLineInterface {
  field: String  
  value: Number;
  icon: ReactNode
}

function CourseDetailsLine({ value, field, icon }: CourseDetailsLineInterface) {
  return (
    <Flex
    mt="1"
    paddingTop="5"

    alignItems="baseline"
    justifyContent="space-around"
    flexDirection="row"
    alignContent="flex-start"
    >
        {icon}
        <Box
        fontWeight="semibold"
        lineHeight="tight"
        fontSize="medium"
        >
            {field}
        </Box>
        <Box
        fontWeight="semibold"
        lineHeight="tight"
        color="gray"
        fontSize="medium"
        >
            {value}
        </Box>
  </Flex>
  );
}

export default CourseDetailsLine;
