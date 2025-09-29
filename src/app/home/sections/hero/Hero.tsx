'use client"';
import Container from "@/app/components/container";
import { MotionText } from "@/app/components/motion";
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
import { motion } from "motion/react";
import Link from "next/link";
import style from "./hero.module.css";

export default function HeroSection() {
  return (
    <Box
      as="header"
      className={`section observe_view ${style.hero}`}
      id={"home"}
    >
      <Container
        h="full"
        pb={100}
        pt={170}
        textAlign={"center"}
        color={"white"}
        as={Center}
        flexDir={"column"}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
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
            color="white"
            as={"h1"}
            fontWeight={"black"}
            size={["4xl", "6xl"]}
            maxW={"4xl"}
          >
            Developing Modern Web and Mobile Apps That Work
            {/* Apps that improve lives */}
          </Heading>
        </motion.div>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
        >
          <VStack>
            <Text
              mt={7}
              color={"whiteAlpha.800"}
              fontSize="medium"
              maxW={{ base: "full", md: "sm" }}
              className={style.brief_intro}
            >
              Helping individuals and businesses turn concepts into digital
              products built to last.
            </Text>
            <HStack mt={7} gap={1}>
              <Text
                style={{
                  fontWeight: "normal",
                  fontSize: "14px",
                }}
              >
                My{" "}
              </Text>
              <motion.p whileTap={{ scale: 0.9 }}>
                <Text
                  fontWeight={400}
                  border={"1px solid white"}
                  rounded={"full"}
                  p={1.5}
                  asChild
                >
                  <Link href={"#myStacks"}> Tools?</Link>
                </Text>
              </motion.p>
            </HStack>
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
}
