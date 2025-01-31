import {
  Box,
  Center,
  Container,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "@/app/components/_section_title";

import Link from "next/link";
import { APP_DATA, Technology } from "@/data/data/appData";
import { motion } from "framer-motion";

export default function TechnologiesSection({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <Box
      id="stacks"
      as={"section"}
      textColor={"white"}
      h="full"
      bg={"blackAlpha.900"}
      className="section"
    >
      <Container maxW={"container.lg"} py={100} textColor={"white"}>
        <div id="myStacks">
          <Box
            as={motion.div}
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
            }}
          >
            <SectionTitle labelInFront={"Technology"} labelBehind={"Stacks"} />
          </Box>

          <Box>
            <SimpleGrid
              mt={5}
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              gap={5}
            >
              {technologies.map((tech, index: number) => {
                return (
                  <GridItem
                    as={motion.div}
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
                    </HStack>
                  </GridItem>
                );
              })}
            </SimpleGrid>

            <Center
              as={motion.div}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              mt={12}
              gap={1.5}
              fontSize={"sm"}
            >
              <Text>What have you</Text>
              <motion.span whileTap={{ scale: 0.9 }}>
                <Text
                  as={Link}
                  fontWeight={400}
                  border={"1px solid white"}
                  rounded={"full"}
                  p={1.5}
                  href={"#myStacks"}
                >
                  done?
                </Text>
              </motion.span>
              <Text>with this technologies</Text>
            </Center>
          </Box>
        </div>
      </Container>
    </Box>
  );
}
