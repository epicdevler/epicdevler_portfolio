import Container from "@/app/components/container";
import {
  Badge,
  Box,
  Center,
  Group,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

// import { Box, Text } from "@/app/components/";

export default function HeroSection() {
  return (
    <Box
      as="header"
      className={`section observe_view `}
      id={"home"}
      borderBottomWidth={"thick"}
      minH={"dvh"}
      bg="bg.muted"
    >
      <Container
        h="full"
        pb={100}
        pt={200}
        textAlign={"center"}
        // color={"white"}
        as={Center}
        flexDir={"column"}
      >
        <Box
          // initial={{ scale: 0.8 }}
          // animate={{ scale: 1 }}
          // transition={{ duration: 0.6, delay: 0 }}
          // viewport={{ once: true }}
        >
          <Group w="full" justifyContent={"center"} hidden>
            <Badge size="lg" rounded="full">
              Web Developer
            </Badge>
            <Badge size="lg" rounded="full">
              Android Developer
            </Badge>
          </Group>
          <Heading
            mt={3}
            // color="white"
            as={"h1"}
            fontWeight={"black"}
            size={["4xl", "6xl"]}
            className="fade-down"
            maxW={"4xl"}
          >
            Developing Modern Web and Mobile Apps That Work
            {/* Apps that improve lives */}
          </Heading>
        </Box>

        <Box
          // initial={{
          //   y: 100,
          //   opacity: 0,
          // }}
          // animate={{
          //   y: 0,
          //   opacity: 1,
          // }}
          // viewport={{ once: true }}
        >
          <VStack className="fade-up">
            <Text mt={7} maxW={{ base: "full", md: "sm" }} fontSize={"lg"}>
              Helping individuals and businesses turn concepts into digital
              products built to last.
            </Text>
            <HStack mt={7} gap={1}>
              <Text fontSize={"md"} fontWeight={"normal"}>
                My
              </Text>
              <Text
                fontWeight={400}
                borderWidth={"thin"}
                rounded={"full"}
                p={1.5}
                asChild
                // whileTap={{ scale: 0.9 }}
              >
                <Link href={"#myStacks"}> Tools?</Link>
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
