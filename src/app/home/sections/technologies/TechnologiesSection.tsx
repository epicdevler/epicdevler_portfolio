import SectionTitle from "@/app/components/_section_title";
import Container from "@/app/components/container";
import { Badge, Box, Float, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

import {
  MotionBox,
  MotionCenter,
  MotionGridItem,
  MotionText,
} from "@/app/components/motion";
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
      color={"white"}
      h="full"
      bg={"blackAlpha.900"}
      className="section observe_view"
    >
      <Container py={100} color={"white"}>
        <div id="myStacks">
          <MotionBox
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
          >
            <SectionTitle labelInFront={"Technology"} labelBehind={"Stacks"} />
          </MotionBox>

          <Box>
            <SimpleGrid
              mt={5}
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              gap={5}
            >
              {technologies.map((tech, index: number) => {
                return (
                  <MotionGridItem
                    initial={{
                      scale: 0.6,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
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
                        bg: "whiteAlpha.100",
                        borderColor: "whiteAlpha.50",
                      }}
                      borderWidth={1}
                      borderColor={"whiteAlpha.100"}
                      bg={"whiteAlpha.50"}
                      w="full"
                      h={"full"}
                      rounded={"md"}
                      p={2}
                    >
                      <Image
                        width={32}
                        height={32}
                        src={`/techs/${tech.name}.svg`}
                        alt={tech.name}
                      />
                      <Text>{tech.name}</Text>
                      {
                        tech.core && <Badge>Major</Badge>
                      }

                    </HStack>
                  </MotionGridItem>
                );
              })}
            </SimpleGrid>

            <MotionCenter
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              mt={12}
              gap={1.5}
              fontSize={"sm"}
            >
              <Text>What have you</Text>
              <MotionText
                whileTap={{ scale: 0.9 }}
                asChild
                fontWeight={400}
                border={"1px solid white"}
                rounded={"full"}
                p={1.5}
              >
                <Link href={"#myStacks"}>done?</Link>
              </MotionText>
              <Text>with this technologies</Text>
            </MotionCenter>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
