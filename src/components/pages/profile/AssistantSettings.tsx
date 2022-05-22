import React from "react";
import {
  Checkbox,
  Flex,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import AssistantImg from "../../../assets/Assistant.png";
import Field from "./Field";

function AssistantSettings() {
  return (
    <Flex gap="4" alignItems="flex-start">
      <Image alt="Assistant face" src={AssistantImg} w="16" />

      <Flex gap="4" direction="column">
        <Flex alignItems="center" gap="4">
          <Text fontWeight="bold">Asistent activ</Text>
          <Checkbox isChecked />
        </Flex>
        <Flex alignItems="center" gap="4">
          <Text fontWeight="bold">Recomanda cursuri</Text>
          <Checkbox isChecked />
        </Flex>
        <Flex alignItems="center" gap="4" direction="column">
          <Text fontWeight="bold" alignSelf="flex-start">
            Nivel de expresivitate
          </Text>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AssistantSettings;
