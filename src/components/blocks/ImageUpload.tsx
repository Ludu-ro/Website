import {
    AspectRatio,
    Box,
    BoxProps,
    Container,
    forwardRef,
    Heading,
    Input,
    Stack,
    Text
  } from "@chakra-ui/react";
  import { motion, useAnimation } from "framer-motion";
import { ChangeEvent } from "react";
import uploadFile from "../../clients/courses/uploadFile";
  
  const first = {
    rest: {
      rotate: "-15deg",
      scale: 0.95,
      x: "-50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "-70%",
      scale: 1.1,
      rotate: "-20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const second = {
    rest: {
      rotate: "15deg",
      scale: 0.95,
      x: "50%",
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      x: "70%",
      scale: 1.1,
      rotate: "20deg",
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const third = {
    rest: {
      scale: 1.1,
      filter: "grayscale(80%)",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      scale: 1.3,
      filter: "grayscale(0%)",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const PreviewImage = forwardRef<BoxProps, typeof Box>((props, ref) => {
    return (
      <Box
        bg="white"
        top="0"
        height="100%"
        width="100%"
        position="absolute"
        borderWidth="1px"
        borderStyle="solid"
        rounded="sm"
        borderColor="gray.400"
        as={motion.div}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={`url("https://miro.medium.com/max/940/1*qXFGbWzWpd00LHVJYWsVJg.png")`}
        {...props}
        ref={ref}
      />
    );
  });

  interface InputMultiPart {

    handleFormData: any,
    values: any
    text: any
    module?: any
  }
  
function ImageUpload( {module, values, text}  : InputMultiPart) {

    const controls = useAnimation();
    const startAnimation = () => controls.start("hover");
    const stopAnimation = () => controls.stop();
    
    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
      
        if(e.target.files){
          
            const files = e.target.files
            const fileUrl = await uploadFile( files[0]);
            values.image = fileUrl
        }
        
       
      };

    return (
      <Container p="3" maxWidth="none">
      
        <AspectRatio width="64" ratio={1}>
       
          <Box
            borderColor="gray.300"
            borderStyle="dashed"
            borderWidth="2px"
            rounded="md"
            shadow="sm"
            role="group"
            transition="all 150ms ease-in-out"
            _hover={{
              shadow: "md"
            }}
            as={motion.div}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >

            <Box position="relative" height="100%" width="100%">
              <Box
                position="absolute"
                top="0"
                left="0"
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
              >
                <Stack
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justify="center"
                  spacing="4"
                >
                  <Box height="16" width="12" position="relative">
                    <PreviewImage
                      variants={first}
                      backgroundImage="url('https://i1.sndcdn.com/avatars-000153968133-10ngy9-t500x500.jpg')"
                    />
                    <PreviewImage
                      variants={second}
                      backgroundImage="url('https://plhswave.org/wp-content/uploads/2018/11/Learning.jpg')"
                    />
                    <PreviewImage
                      variants={third}
                      backgroundImage={`url("https://miro.medium.com/max/940/1*qXFGbWzWpd00LHVJYWsVJg.png")`}
                    />
                  </Box>
                  
                  <Stack p="8" textAlign="center" spacing="1">
                    <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                      {text}
                    </Heading>
                    <Text fontWeight="light">sau apasa pentru a o incarca</Text>
                  </Stack>
                </Stack>

              </Box>

              <Input
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                onDragEnter={startAnimation}
                onDragLeave={stopAnimation}
                onChange = {e => handleFileUpload(e)}
              />
              
            </Box>
          </Box>
        </AspectRatio>
      </Container>
    );
  }

  export default ImageUpload;


