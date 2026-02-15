import SectionTitle from "@/app/components/_section_title";
import { MotionBox, MotionButton } from "@/app/components/motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import epicdevlerImg from "../../../../../public/epicdevler.webp";
import Container from "@/app/components/container";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Box
      id="about"
      as={"section"}
      // bg={"blackAlpha.900"}
      className="section observe_view"
    >
      <Container maxW={"6xl"} py={100} px={10}>
        <Flex
          flexDir={["column-reverse", null, "row"]}
          alignItems={"center"}
          gapX={10}
          justifyContent={"space-between"}
        >
          <MotionBox
            initial={{
              x: -150,
            }}
            whileInView={{
              x: 0,
            }}
            maxW={{ base: "full" }}
          >
            <SectionTitle
              labelInBehindColor="white"
              labelInFrontColor={"brand"}
              labelInFront={"About"}
              labelBehind={"Me"}
            />
            <Text
              fontWeight={400}
              lineHeight={"28px"}
              my={"24px"}
              fontSize={["md", null, "large"]}
              color={"white"}
            >
              Hi, I&#39;m Nwadike Philip, a software developer with a focus on
              building user-friendly and impactful apps. I specialize in
              developing modern web apps using <strong>React.js</strong> and{" "}
              <strong>Next.js</strong> and android applications with{" "}
              <strong>Kotlin</strong> and <strong>Jetpack Compose</strong>.
              <br />
              I create practical, user-friendly software that delivers value.
              <br />
              <br />
              I enjoy turning ideas into reality, from concept to deployment,
              whether it&#39;s a mobile app, a responsive website or app. My
              approach is built on designing and writing clean, maintainable and
              scalable code
              <br />
              {/*  <br />
              My toolkit includes <strong>Firebase</strong>,{" "}
              <strong>REST APIs</strong>, and <strong>Git</strong>, enabling
              smooth collaboration and scalable solutions. Beyond the code,
              I&#39;m always open to learning, exploring new technologies, and
              working with great teams to build products that make a difference.
              <br /> */}
              <br />
              I&#39;m always open to new challenges and opportunities to grow as
              a developer, collaborate with great teams, and build software that
              makes a difference.
              <br />
              <br />
              Let&#39;s connect and bring ideas to life together.
            </Text>
            <MotionButton
              whileTap={{ scale: 0.9 }}
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
            animate={{
              x: 0,
            }}
            aspectRatio={"1"}
            mx={{ base: "auto", lg: "0" }}
            minH={"sm"}
            objectFit={"cover"}
            rounded={"lg"}
            p={2}
            w={"full"}
            bg="bg.muted"
            maxW="sm"
            asChild
          >
            <Image
              src={epicdevlerImg}
              alt="Image of Philip Nwadike"
              style={{ borderRadius: "20px" }}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
