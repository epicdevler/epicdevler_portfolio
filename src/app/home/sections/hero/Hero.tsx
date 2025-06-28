import Container from "@/app/components/container";
import { MotionBox, MotionText, MotionVStack } from "@/app/components/motion";
import { Box, Center, Heading, HStack, Text } from "@chakra-ui/react";
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
        <MotionBox
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Heading
            color='white'
            as={"h1"}
            fontWeight={"black"}
            size={["4xl", "6xl"]}            
            maxW={"3xl"}
          >
            Passionately Developing Apps That Improves Lives
            {/* Apps that improve lives */}
          </Heading>
        </MotionBox>

        <MotionVStack
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Text
            mt={7}
            color={"whiteAlpha.800"}
            fontSize="medium"
            maxW={{ base: "full", md: "md" }}
            className={style.brief_intro}
          >
            Inspired by passion, motivated for the future, building solutions to
            stand the test of time.
          </Text>
          <HStack mt={7} gap={1}>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: "14px",
              }}
            >
              What are your{" "}
            </Text>
            <MotionText
              whileTap={{ scale: 0.9 }}
              asChild
              fontWeight={400}
              border={"1px solid white"}
              rounded={"full"}
              p={1.5}
            >
              <Link href={"#myStacks"}> stacks?</Link>
            </MotionText>
          </HStack>
        </MotionVStack>
      </Container>
    </Box>
  );
}
