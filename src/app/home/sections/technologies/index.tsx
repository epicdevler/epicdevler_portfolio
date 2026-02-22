import SectionTitle from "@/app/components/_section_title";
import Container from "@/app/components/container";
import { Badge, Box, Center, Float, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

// import {
//   Box,
//   Center,
//   GridItem,
//   Text,
// } from "@/app/components/";
import { Technology } from "@/data/data/appData";
import Link from "next/link";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <Box
      id="stacks"
      as={"section"}
      // color={"white"}
      h="full"
      // bg={"blackAlpha.900"}
      className="section observe_view fade-up"
    >
      <Container py={100}>
        <Box id="myStacks">
          <Box
            // initial={{
            //   x: -100,
            // }}
            // whileInView={{
            //   x: 0,
            // }}
          >
            <SectionTitle labelInFront={"Stacks"} labelBehind={"Tech"} />
          </Box>

          <Box>
            <SimpleGrid
              mt={5}
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              gap={5}
            >
              {technologies
                .sort((a, b) => (a.core ? -1 : 1))
                .map((tech, index: number) => {
                  return (
                    <GridItem
                      // initial={{
                      //   scale: 0.6,
                      // }}
                      // whileInView={{
                      //   scale: 1,
                      // }}
                      key={index}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      colSpan={"auto"}
                    >
                      <HStack
                        pos={"relative"}
                        transitionDuration={".2s"}
                        _hover={{
                          bg: "bg.emphasized",
                          // borderColor: "whiteAlpha.50",
                        }}
                        borderWidth={1}
                        // borderColor={"whiteAlpha.100"}
                        // bg={"whiteAlpha.50"}
                        w="full"
                        h={"full"}
                        rounded={"md"}
                        p={2}
                      >
                        <Image
                          width={32}
                          height={32}
                          src={tech.imgUrl ?? `/techs/${tech.name}.svg`}
                          alt={tech.name}
                        />
                        <Text>{tech.name}</Text>
                        {tech.core && <Float offsetX={5}><Badge>Major</Badge></Float>}
                      </HStack>
                    </GridItem>
                  );
                })}
            </SimpleGrid>

            <Center
              // initial={{ y: 100 }}
              // whileInView={{ y: 0 }}
              // viewport={{ once: true }}
              mt={12}
              gap={1.5}
              fontSize={"sm"}
            >
              <Text>What have you</Text>
              <Text
                // whileTap={{ scale: 0.9 }}
                asChild
                fontWeight={400}
                borderWidth={"thin"}
                rounded={"full"}
                p={1.5}
              >
                <Link href={"#myStacks"}>done?</Link>
              </Text>
              <Text>with this technologies</Text>
            </Center>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
