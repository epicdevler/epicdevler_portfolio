import SectionTitle from "@/app/components/_section_title";
import { MotionBox, MotionButton } from "@/app/components/motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import epicdevlerImg from "../../../../../public/epicdevler.png";
import Container from "@/app/components/container";


const AboutSection = () => {
  return (
    <Box id="about" as={"section"} bg={"blackAlpha.900"} className="section observe_view">
      <Container maxW={"6xl"} py={100} px={10}>
        <Flex
          flexWrap={"wrap-reverse"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MotionBox
            initial={{
              x: -150,
            }}
            whileInView={{
              x: 0,
            }}
            maxW={{base:'full', md:"lg"}}
            
          >
            <SectionTitle
              labelInBehindColor="white"
              labelInFrontColor={"brand"}
              labelInFront={"About"}
              labelBehind={"Me"}
            />
            <Text
              as={"p"}
              fontWeight={400}
              lineHeight={"28px"}
              my={"24px"}
              fontSize={"14px"}
              color={"white"}
            >
              Hi, I’m Nwadike Philip — a Mechatronics Engineering Technology
              student and a passionate software developer.
              <br />
              I build practical, user-focused solutions that bridge hardware and
              software.
              <br />
              <br />
              My core skills include Android app development with{" "}
              <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>, as
              well as modern web development with <strong>React.js</strong> and{" "}
              <strong>Next.js</strong>.<br />
              I enjoy designing clean architectures, writing maintainable code,
              and solving real-world problems with technology.
              <br />
              <br />
              Some of my recent projects range from a smart voting system and a
              fintech app with offline-first capabilities to{" "}
              <strong>KeepUp</strong>, a productivity app that helps students
              stay organized and on schedule.
              <br />
              I believe in using tech to make everyday life easier and more
              efficient.
              <br />
              <br />
              When I’m not coding, I’m exploring ideas that combine sustainable
              technology with real community impact.
              <br />
              I’m always open to new opportunities to learn, collaborate, and
              build meaningful products.
              <br />
              <br />
              Let’s connect and create something valuable together.
            </Text>
            <MotionButton
              whileTap={{ scale: 0.9 }}
              p={7}
              fontWeight={"normal"}
              _hover={{ bg: "brand" }}
              rounded={"full"}
              variant={"outline"}
              // textColor={"white"}
            >
              Contact Me
            </MotionButton>
          </MotionBox>

          <MotionBox
            initial={{
              x: 150,
            }}
            whileInView={{
              x: 0,
            }}
            marginY={{ base: 16, md: "0" }}
            width={{ base: "250px", sm: "350px" }}
            aspectRatio={"1"}
            mx={{ base: "auto", lg: "0" }}
          >
            <Image
              src={epicdevlerImg}
              alt=""
              style={{
                borderRadius: "100%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
