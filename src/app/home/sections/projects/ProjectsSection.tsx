import SectionTitle from "@/app/components/_section_title";
import Container from "@/app/components/container";
import { jua } from "@/app/fonts";
import { Project } from "@/data/data/appData";
import {
  Badge,
  Box,
  ButtonGroup,
  Card,
  Flex,
  Float,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import Link from "next/link";

import {
  MotionBox,
  MotionButton,
  MotionGridItem,
  MotionIconButton,
  MotionText,
} from "@/app/components/motion";
import Image from "next/image";
import React from "react";
import { LuGithub, LuLink2 } from "react-icons/lu";

const _projects: Project[] = [
  {
    tags: ["Android"],
    title: "Aminote (minote)",
    startDate: "Aug 2022",
    endDate: "Continues Development",
    imgUrl: "/projects/minote_graphics.webp",
    imgAlt: "Aminote Image Graphic",
    githubUrl: "https://github.com/epicdevler/aminote.git",
  },
  {
    tags: ["Web"],
    title: "FoodApp | Resturant Ordering System",
    startDate: "Aug 2023",
    endDate: "Nov 2023",
    imgUrl: "/projects/foodApp_graphics.webp",
    imgAlt: "FoodApp Image Graphic",
    githubUrl: "https://github.com/epicdevler/csp-foodapp.git",
    liveUrl: "https://decutleries.vercel.app/",
  },
  {
    tags: ["Web"],
    title: "myInstitute | Course Registration System for Higher Institutes",
    startDate: "Aug 2025",
    endDate: "Aug 2025",
    imgUrl: "/projects/myInstitute.webp",
    imgAlt: "MyInstitute Login Page Snapshot",
    githubUrl: "https://github.com/epicdevler/myInstitute.git",
    liveUrl: "https://myInstitute.vercel.app/",
  },
  {
    tags: ["Web", "Client"],
    title: "ErrandKing Logistics - Logistics Service",
    // startDate: "Aug 2025",
    // endDate: "Aug 2025",
    imgUrl: "/projects/errandking.com.preview.webp",
    imgAlt: "Errandking site preview",
    // githubUrl: "https://github.com/epicdevler/myInstitute.git",
    liveUrl: "https://errandking.com",
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

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
          {_projects.toReversed().map((project, index) => {
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
        role="group"
        initial={{ x: index % 2 == 0 ? -100 : 100 }}
        whileInView={{ x: 0 }}
        h="full"
        viewport={{ once: true, amount: "some" }}
      >
        <Card.Root rounded="2xl" h="full" overflow={"hidden"}>
          <Card.Header p={0} pos="relative">
            <Box asChild w="full" objectFit={"cover"} roundedBottom={"md"}>
              <Image
                width={720}
                height={720}
                quality={100}
                src={project.imgUrl}
                alt={project.imgAlt}
              />
            </Box>

            {/* <Float offsetX={6} offsetPosition="right" offsetY={4} > */}
            <HStack pos="absolute" right={0} m={2}>
              {project.tags.map((tag) => {
                return (
                  <Badge key={tag} size="sm" rounded="full" w="fit">
                    {tag}
                  </Badge>
                );
              })}
            </HStack>
            {/* </Float> */}
          </Card.Header>

          <Card.Body p={4}>
            <Text
              w="full"
              className={jua.className}
              fontSize={"16px"}
              fontWeight={400}
              color={"white"}
            >
              {project.title}
            </Text>

             {project.startDate && (
                <Text color="fg.muted" fontWeight={"300"} fontSize={"sm"} mt={1}>
                  {project.startDate}{" "}
                  {project.endDate && `- ${project.endDate}`}
                </Text>
              )}
          </Card.Body>
          <Card.Footer p={4}>
            {project.githubUrl && (
              <MotionIconButton
                bg={"transparent"}
                _hover={{ bg: "brand", borderColor: "brand", color: "white" }}
                transitionDuration={".3s"}
                fontWeight={"normal"}
                rounded={"full"}
                asChild
                size="sm"
                variant={"outline"}
              >
                <Link target="_blank" href={project.githubUrl}>
                  <LuGithub />
                </Link>
              </MotionIconButton>
            )}

            {project.liveUrl && (
              // <motion.div

              //   style={{ width: "fit-content" }}
              // >
              <MotionIconButton
                _hover={{ bg: "brand", borderColor: "brand", color: "white" }}
                transitionDuration={".3s"}
                bg={"transparent"}
                fontWeight={"normal"}
                rounded={"full"}
                size={"sm"}
                asChild
                variant={"outline"}
              >
                <Link target="_blank" href={project.liveUrl}>
                  <LuLink2 />
                </Link>
              </MotionIconButton>
              // </motion.div>
            )}
          </Card.Footer>
        </Card.Root>
      </MotionGridItem>
    );
  },
);

ProjectCard.displayName = "ProjectCard";
