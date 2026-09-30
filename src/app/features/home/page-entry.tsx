"use client";
import NavigationBar from "@/components/navbar/navbar";
import { Center, Heading } from "@chakra-ui/react";
import { motion } from "motion/react";

export default function HomePageEntry() {
  return (
    <>
      <NavigationBar />
      <Center minH="svh">
        <Heading asChild pos={"relative"}>
          <motion.h1
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
          >
            Hello World
          </motion.h1>
        </Heading>
      </Center>
    </>
  );
}
