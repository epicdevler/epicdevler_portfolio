"use client";
import {
  Button,
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import { jua } from "@/app/fonts";
import Link from "next/link";
import { Project } from "@/data/data/appData";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const _projects: Project[] = [
  {
    type: "Android",
    title: "Aminote (minote)",
    startDate: "Aug 2022",
    endDate: "Continues Development",
    imgUrl: "/projects/minote_graphics.png",
    alt: "Aminote Image Graphic",
    descr: "",
    githubUrl: "https://github.com/epicdevler/aminote.git",
    link: "",
  },
  {
    type: "Web",
    title: "FoodApp | Resturant Ordering System",
    startDate: "Aug 2023",
    endDate: "Nov 2023",
    imgUrl: "/projects/foodApp_graphics.png",
    alt: "FoodApp Image Graphic",
    descr: "",
    githubUrl: "https://github.com/epicdevler/csp-foodapp.git",
    link: "https://decutleries.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projects" as={"section"} bg={"blackAlpha.900"} className="section">
      <Container as={"section"} maxW={"container.lg"} py={100}>
        <Box
          as={motion.div}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          textColor="white"
        >
          <SectionTitle
            labelInFrontColor={"brand"}
            labelInFront={"Projects"}
            labelBehind={"My"}
          />
        </Box>
        <Text
          as={motion.p}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          fontWeight={400}
          textColor={"whiteAlpha.900"}
          lineHeight={"28px"}
          my={"24px"}
          fontSize={"14px"}
        >
          This endeavor was more than just lines of code; it was a passionate
          exploration of possibilities. Iterative development and adaptability.
          This are crucial self paced project during my learning/early career
          stage... that shaped me today. The integration of diverse technical
          skills from front-end to back-end collectively brings together a
          spectrum of talents to ensure comprehensive and efficient development.
        </Text>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }} gap={5}>
          {_projects.map((project, index) => {
            return <ProjectCard key={index} index={index} project={project} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

const ProjectCard = React.memo(
  ({ index, project }: { index: number; project: Project }) => {
    const gradientBackground =
      "linear-gradient(180deg, rgb(0 0 0 / 39%) 17.71%, rgb(0 0 0 / 76%) 71.87%)";

    return (
      <GridItem
        w="full"
        role="group"
        as={motion.div}
        mt={5}
        initial={{ x: index % 2 == 0 ? -100 : 100 }}
        whileInView={{ x: 0 }}
      >
        <Box w="full" borderRadius={"8px"} pos={"relative"} h={"290px"}>
          <Image
            width={100}
            height={100}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              objectPosition: "end",
            }}
            loading="lazy"
            src={project.imgUrl}
            alt=""
          />
          <Flex
            w="full"
            height={"full"}
            alignItems={"start"}
            transitionProperty={"background"}
            transitionDuration={".5s"}
            _hover={{
              backdropFilter: "blur(0px)",
            }}
            borderRadius={"8px"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            p={"10px"}
            backdropFilter={"blur(2px)"}
            background={gradientBackground}
            pos={"absolute"}
            top={0}
            left={0}
          >
            <Text
              textColor={"rgba(246,246,246,0.6)"}
              fontSize={"12px"}
              fontWeight={"300"}
            >
              {project.type}
            </Text>
            <Box w={"full"}>
              <Text
                w="full"
                className={jua.className}
                mb={"16px"}
                fontSize={"16px"}
                fontWeight={400}
                textColor={"white"}
              >
                {project.title}
              </Text>
              <Flex w="full" justifyContent={"space-between"}>
                {project.startDate !== "" ? (
                  <div>
                    <Text
                      textColor={"rgba(246,246,246,0.6)"}
                      fontSize={"12px"}
                      fontWeight={"300"}
                    >
                      Start
                    </Text>
                    <Text
                      textColor={"white"}
                      fontWeight={"300"}
                      fontSize={"12px"}
                    >
                      {project.startDate}
                    </Text>
                  </div>
                ) : (
                  <></>
                )}
                {project.endDate !== "" ? (
                  <div className="mt-5">
                    <Text
                      textColor={"rgba(246,246,246,0.6)"}
                      fontSize={"12px"}
                      fontWeight={"300"}
                    >
                      End
                    </Text>

                    <Text
                      textColor={"white"}
                      fontWeight={"300"}
                      fontSize={"12px"}
                    >
                      {project.endDate}
                    </Text>
                  </div>
                ) : (
                  <></>
                )}
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Flex mt="5">
          {project.link !== "" ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              style={{ width: "fit-content" }}
            >
              <Button
                py={4}
                px={6}
                _hover={{ bg: "brand", borderColor: "brand" }}
                textColor={"white"}
                transitionDuration={".3s"}
                borderWidth={1}
                borderColor={"white"}
                bg={"transparent"}
                fontWeight={"normal"}
                fontSize={"14"}
                me="2"
                borderRadius={"full"}
                as={Link}
                target="_blank"
                href={project.link!!}
              >
                View
              </Button>
            </motion.div>
          ) : (
            <></>
          )}
          {project.githubUrl !== "" ? (
            <motion.div
              whileTap={{ scale: 0.9 }}
              style={{ width: "fit-content" }}
            >
              <Button
                py={4}
                px={6}
                bg={"transparent"}
                _hover={{ bg: "brand", borderColor: "brand" }}
                textColor={"white"}
                transitionDuration={".3s"}
                borderWidth={1}
                borderColor={"white"}
                fontWeight={"normal"}
                fontSize={"14"}
                borderRadius={"full"}
                as={Link}
                target="_blank"
                href={project.githubUrl}
              >
                GitHub
              </Button>
            </motion.div>
          ) : (
            <></>
          )}
        </Flex>
      </GridItem>
    );
  }
);

ProjectCard.displayName = "ProjectCard"
