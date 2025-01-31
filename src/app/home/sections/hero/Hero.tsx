import style from "./hero.module.css";
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <Box as="header" className={`section ${style.hero}`} id={"start"}>
      <Container
        maxW={"container.lg"}
        h="full"
        pb={100}
        pt={170}
        textAlign={"center"}
        textColor={"white"}
        as={Center}
        flexDir={"column"}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{
            scale: 1,
          }}
        >
          <Heading
            bgGradient="linear(to-r, silver, silver, brand, silver)"
            bgClip="text"
            as={"h1"}
            fontWeight={"black"}
            boxShadow={"2xl"}
            size={["2xl", "3xl"]}
            maxW={"3xl"}
          >
            Passionately Developing Apps That Improves Lives
            {/* Apps that improve lives */}
          </Heading>
        </motion.div>

        <VStack
          as={motion.div}
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
        >
          <Text
            mt={7}
            textColor={"whiteAlpha.800"}
            fontSize="medium"
            maxW={{ base: "full", md: "md" }}
            className={style.brief_intro}
          >
            Inspired by passion, motivated for the future, building solutions to
            stand the test of time.
          </Text>
          <HStack mt={7} spacing={1}>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: "14px",
              }}
            >
              What are your{" "}
            </Text>
            <motion.span whileTap={{ scale: 0.9 }}>
              <Text
                as={Link}
                fontWeight={400}
                border={"1px solid white"}
                rounded={"full"}
                p={1.5}
                href={"#myStacks"}
              >
                stacks?
              </Text>
            </motion.span>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
