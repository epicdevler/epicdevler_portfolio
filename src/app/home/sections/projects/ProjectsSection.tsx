import SectionTitle from "@/app/components/_section_title";
import Container from "@/app/components/container";
import { jua } from "@/app/fonts";
import { Project } from "@/data/data/appData";
import { Box, ButtonGroup, Card, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import Link from "next/link";

import {
  MotionBox,
  MotionButton,
  MotionGridItem,
  MotionText,
} from "@/app/components/motion";
import Image from "next/image";
import React from "react";

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
  {
    type: "Web",
    title: "myInstitute | High Institute Course Registration System",
    startDate: "Aug 2023",
    endDate: "Nov 2023",
    imgUrl: "/projects/myInstitute.png",
    alt: "MyInstitute Login Page Snapshot",
    descr: "",
    githubUrl: "https://github.com/epicdevler/myInstitute.git",
    link: "https://myInstitute.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      as={"section"}
      bg={"blackAlpha.900"}
      className="section observe_view"
    >
      <Container as={"section"} py={200}>
        <MotionBox initial={{ y: 100 }} whileInView={{ y: 0 }} color="white">
          <SectionTitle
            labelInFrontColor={"brand"}
            labelInFront={"Projects"}
            labelBehind={"My"}
          />
        </MotionBox>
        <MotionText
          as={motion.p}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          fontWeight={400}
          color={"whiteAlpha.900"}
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
        </MotionText>

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
      <MotionGridItem
        colSpan={2}
        w="full"
        role="group"
        initial={{ x: index % 2 == 0 ? -100 : 100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true, amount: 'some' }}
      >
        <Card.Root flexDirection={"row"}>
          <Box asChild w='3/12' objectPosition={'left'} objectFit={'cover'}>
            <Image
            width={100}
            height={100}
            src={project.imgUrl}
            alt=""
          />
          </Box>
          <Card.Body>
            <Text
              color={"rgba(246,246,246,0.6)"}
              fontSize={"sm"}
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
                color={"white"}
              >
                {project.title}
              </Text>
              {project.startDate !== "" && (
                <div>
                  <Text
                    color={"rgba(246,246,246,0.6)"}
                    fontSize={"sm"}
                    fontWeight={"300"}
                  >
                    Start
                  </Text>
                  <Text color={"white"} fontWeight={"300"} fontSize={"md"}>
                    {project.startDate}
                  </Text>
                </div>
              )}
              {project.endDate !== "" && (
                <div className="mt-5">
                  <Text
                    color={"rgba(246,246,246,0.6)"}
                    fontSize={"sm"}
                    fontWeight={"300"}
                  >
                    End
                  </Text>

                  <Text color={"white"} fontWeight={"300"} fontSize={"md"}>
                    {project.endDate}
                  </Text>
                </div>
              )}
            </Box>
            <ButtonGroup mt="5">
              {project.link !== "" && (
                // <motion.div

                //   style={{ width: "fit-content" }}
                // >
                <MotionButton                  
                  py={4}
                  px={6}
                  _hover={{ bg: "brand", borderColor: "brand" }}
                  color={"white"}
                  transitionDuration={".3s"}
                  borderWidth={'thin'}
                  borderColor={"white"}
                  bg={"transparent"}
                  fontWeight={"normal"}
                  
                  rounded={"full"}
                  asChild
                >
                  <Link target="_blank" href={project.link!!}>
                    View
                  </Link>
                </MotionButton>
                // </motion.div>
              )}
              {project.githubUrl !== "" && (
                // <motion.div
                //   whileTap={{ scale: 0.9 }}
                //   style={{ width: "fit-content" }}
                // >
                <MotionButton
                  py={4}
                  px={6}
                  bg={"transparent"}
                  _hover={{ bg: "brand", borderColor: "brand" }}
                  color={"white"}
                  transitionDuration={".3s"}
                  borderWidth={1}
                  borderColor={"white"}
                  fontWeight={"normal"}
                  rounded={"full"}
                  asChild
                >
                  <Link target="_blank" href={project.githubUrl}>
                    GitHub
                  </Link>
                </MotionButton>
                // </motion.div>
              )}
            </ButtonGroup>
          </Card.Body>
        </Card.Root>
      </MotionGridItem>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
