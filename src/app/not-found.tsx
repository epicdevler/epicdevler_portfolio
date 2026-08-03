"use client";
import NavigationBar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/provider";
import { Center, Container, Heading, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function NotFoundPage() {
  const slug = usePathname();
  return (
    <ThemeProvider>
      <Container>
      <NavigationBar pos="relative" />

      <Center flexDir={"column"} py={200}>
        <Heading>404 Path: {slug}</Heading>
        <Text>this page or resourse is not found</Text>
      </Center>
    </Container>
    </ThemeProvider>
  );
}
