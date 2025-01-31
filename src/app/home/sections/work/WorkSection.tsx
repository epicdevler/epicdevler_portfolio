"use client";
import {
  Avatar,
  Box,
  Center,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { APP_DATA, WorkExperience } from "@/data/data/appData";
import Link from "next/link";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { motion } from "framer-motion";

const WorkSection = ({ workItems }: { workItems: WorkExperience[] }) => {
  return (
    <Box
      id="work"
      as={"section"}
      bg={"blackAlpha.900"}
      textColor={"white"}
      className="section"
    >
      <Container maxW={"container.lg"} py={100}>
        <SimpleGrid columns={[1, null, 1]}>
          <Box as={motion.div}
          initial={{x:-100}}
          whileInView={{x:0}}
           >
            <SectionTitle labelInFront={"Experience"} labelBehind={"Work"} />
            <Text
              maxW={"lg"}
              fontWeight={400}
              lineHeight={"28px"}
              my={"24px"}
              fontSize={"14px"}
            >
              I have gained valueable insight colloborating with teams of
              different backgrounds within and outside an organization, national
              and internationally.
            </Text>
          </Box>
          <Box pt={50}>
            <VStack gap={0}>
              {workItems.map((item, index) => {
                return <WorkItem key={index} index={index} item={item} />;
              })}
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WorkSection;

export function WorkItem({
  index,
  item,
}: {
  index: number;
  item: WorkExperience;
}) {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Flex w={"full"} gap={2}
    as={motion.div}
    initial={{y:100}}
    whileInView={{y:0}}
    >
      <VStack gap={0}>
        <Center p={2} rounded={"full"} bg={"whiteAlpha.100"}>
          <Avatar name={item.role} loading={"lazy"} />
        </Center>
        <Box
          h="full"
          width={"1"}
          rounded={"full"}
          background={"whiteAlpha.100"}
        />
      </VStack>

      <Box
        rounded={"md"}
        background={"whiteAlpha.100"}
        w="full"
        p={3}
        mb={APP_DATA.experience.length - 1 == index ? 2 : 5}
      >
        <Box w="full">
          <HStack>
            <Text fontWeight={"bold"} fontSize={"lg"} w="full">
              {item.role}
            </Text>
            <IconButton
              p={1}
              h={"fit-content"}
              textColor={"white"}
              aria-label="toggle"
              _hover={{}}
              variant={"ghost"}
              onClick={handleToggle}
              w={"fit-content"}
            >
              {show == true ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </HStack>
          <HStack flexWrap={"wrap"} mb={3} fontSize={"sm"} gap={[1, null, 3]}>
            <Text fontWeight={"semibold"}>{item.company}</Text>
            <Text hideBelow={"md"}>-</Text>
            <Text>{item.year}</Text>
          </HStack>
          <Flex flexWrap={"wrap"}>
            {item.categories.map((category, index) => {
              return category.refUrl != undefined ? (
                <Text
                  key={index}
                  _hover={{ textColor: "brand" }}
                  as={Link}
                  href={`${category.refUrl}`}
                >
                  {category.title}
                  <Text
                    as={"span"}
                    hidden={item.categories.length - 1 == index}
                  >
                    {`,`}&nbsp;
                  </Text>
                </Text>
              ) : (
                <Text key={index}>
                  {category.title}
                  <Text
                    as={"span"}
                    hidden={item.categories.length - 1 == index}
                  >
                    {`,`}&nbsp;
                  </Text>
                </Text>
              );
            })}
          </Flex>
        </Box>

        {
          <Collapse startingHeight={115} in={show}>
            <MarkdownPreview
              disableCopy={true}
              source={item.description}
              style={{
                background: "transparent",
                marginTop: "32px",
                color: "white",
              }}
            />
            {/* <Text mt={5} ps={0} fontSize={'sm'} >{item.description}</Text> */}
          </Collapse>
        }
      </Box>
    </Flex>
  );
}
