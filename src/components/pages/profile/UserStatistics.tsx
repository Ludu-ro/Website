// import React from 'react'
import React, { useContext, useEffect, useState } from "react";
import { Flex, Text, Box, Icon, Button, Spinner, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../blocks";
import { getAchievements, getStudentStatistics } from "../../../clients";
import { UserActionType, UserContext } from "../../../hooks";
import { Course, Module, Student } from "../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogOut } from "react-icons/bi";
import Field from "./Field";

function UserStatistics() {
  const { user } = useContext(UserContext);
  const [statistics, setStatistics] = useState([""]);

  const getStatistics = () => {
    getStudentStatistics(user?.id, localStorage.getItem("jwt")).then((result) => {
        setStatistics(result);
    })
  }

  if (user?.role === "teacher") {
        return <div>Statistics for teacher</div>
   }

 if(statistics.length === 1) {
    getStatistics()
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color="primary-dark"
    size='xl'
  />
 }
 return (
     <Box display="flex" flexDirection="row" gap="2" p="6" flexWrap="wrap">
         {statistics.map(statistic => {
             return (<Box margin="4">
                <Image
                    w="100%"
                    h="450"
                    objectFit="cover"
                    src={`data:image/svg+xml;base64,${statistic}`}
                    alt="some statistics"
                />
            </Box>);
         })}
     </Box>
  );
}

export default UserStatistics;
