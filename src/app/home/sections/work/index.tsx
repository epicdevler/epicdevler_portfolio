"use client";
import SectionTitle from "@/app/components/_section_title";
import {
  Avatar,
  Box,
  CardRoot,
  Center,
  Collapsible,
  Flex,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import Container from "@/app/components/container";
// import { Box, HStack } from "@/app/components/";
import { APP_DATA, WorkExperience } from "@/data/data/appData";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Link from "next/link";
import { useState } from "react";

export default function WorkSection({
  workItems,
}: {
  workItems: WorkExperience[];
}) {
  return (
    <Box
      id="work"
      as={"section"}
      // bg={"blackAlpha.900"}
      // color={"white"}
      className="section observe_view"
    >
      <Container py={100}>
        <SimpleGrid columns={[1, null, 1]}>
          <Box /* initial={{ x: -100 }} whileInView={{ x: 0 }} */>
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
}

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
    <HStack
      w={"full"}
      gap={2}
      // initial={{ y: 100 }}
      // whileInView={{ y: 0 }}
      alignItems={"flex-start"}
    >
     {/*  <VStack gap={0} h="full">
        <Center p={2} rounded={"full"} bg={"whiteAlpha.100"}>
          <Avatar.Root>
            <Avatar.Fallback name={item.role} />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </Center>
        <Box
          h="full"
          width={"4"}
          rounded={"full"}
          background={"whiteAlpha.800"}
        />
      </VStack>
 */}
      <CardRoot
        rounded={"md"}
        background={"bg.subtle"}
        w="full"
        mb={APP_DATA.experience.length - 1 == index ? 2 : 5}
      >
        <Box w="full">
          <HStack
            p={4}
            onClick={handleToggle}
            _hover={{ bg: "bg.muted" }}
            transition={"background 0.3s ease"}
            cursor={"pointer"}
            borderBottomWidth={"thin"}            
            mb={3}
          >
            <Text fontWeight={"bold"} fontSize={"lg"} w="full">
              {item.role}
            </Text>
            <IconButton
              p={1}
              h={"fit-content"}              
              aria-label="toggle"
              variant={"ghost"}
              onClick={handleToggle}
              w={"fit-content"}
            >
              {show == true ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </IconButton>
          </HStack>
          <HStack px={4} flexWrap={"wrap"} mb={3} fontSize={"sm"} gap={[1, null, 3]}>
            <Text fontWeight={"semibold"}>{item.company}</Text>
            <Text hideBelow={"md"}>-</Text>
            <Text>{item.year}</Text>
          </HStack>
          <Flex flexWrap={"wrap"} px={4} pb={4}>
            {item.categories.map((category, index) => {
              return category.refUrl != undefined ? (
                <Text key={index} _hover={{ color: "brand" }} asChild>
                  <Link href={`${category.refUrl}`}>
                    {category.title}
                    <Text
                      as={"span"}
                      hidden={item.categories.length - 1 == index}
                    >
                      {`,`}&nbsp;
                    </Text>
                  </Link>
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
          <Collapsible.Root
            open={show}
            onOpenChange={() => {
              handleToggle();
            }}
          >
            <Collapsible.Content p={4}>
              <MarkdownPreview
                disableCopy={true}
                source={item.description}
                style={{
                  background: "transparent",
                  marginTop: "32px",
                  color: "white",
                }}
              />
            </Collapsible.Content>
          </Collapsible.Root>
        }
      </CardRoot>
    </HStack>
  );
}
