import SectionTitle from "@/app/components/_section_title";
import { MotionBox, MotionButton } from "@/app/components/motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import epicdevlerImg from "../../../../../public/epicdevler.png";
import Container from "@/app/components/container";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Box
      id="about"
      as={"section"}
      bg={"blackAlpha.900"}
      className="section observe_view"
    >
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
            maxW={{ base: "full", md: "lg" }}
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
              fontSize={["md", null, "large"]}
              color={"white"}
            >
              Hi, I’m Nwadike Philip — a Mechatronics Engineering Technology
              student and a passionate software developer.
              <br />
              I create practical, user-friendly software that solves problems
              and delivers real value.
              <br />
              <br />
              My core skills include building Android applications with{" "}
              <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>,
              developing modern web apps with <strong>React.js</strong> and{" "}
              <strong>Next.js</strong>, and designing clean, maintainable code
              architecture.
              <br />
              I’m also comfortable working with tools like Firebase, REST APIs,
              and Git for smooth, collaborative development.
              <br />
              <br />
              I love taking ideas from concept to deployment, whether it’s a
              mobile app, a responsive website, or a feature-rich platform.
              <br />
              <br />
              I’m always open to new challenges and opportunities to grow as a
              developer, collaborate with great teams, and build software that
              makes a difference.
              <br />
              <br />
              Let’s connect and bring ideas to life together.
            </Text>
            <MotionButton
              whileTap={{ scale: 0.9 }}
              p={7}
              fontWeight={"normal"}
              _hover={{ bg: "brand" }}
              rounded={"full"}
              variant={"outline"}
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
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
