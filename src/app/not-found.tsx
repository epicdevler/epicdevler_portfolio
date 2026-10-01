"use client";
import { Navbar } from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/provider";
import { Button, Center, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import SystemTheme from "./theme/theme";

export default function NotFoundPage() {
  const slug = usePathname();
  return (
    <ThemeProvider
      systemTheme={SystemTheme}
      forcedTheme="light"
      defaultTheme="light"
      enableSystem={false}
    >
      <Navbar />
      <Center
        as="main"
        flexDir="column"
        gap="6"
        py="section"
        px="gutter"
        textAlign="center"
      >
        <Heading as="h1" textStyle="display.sm">
          404 — {slug}
        </Heading>
        <Text color="fg.muted">This page or resource could not be found.</Text>
        <Button asChild variant="outline" size="lg">
          <NextLink href="/">Back to home</NextLink>
        </Button>
      </Center>
    </ThemeProvider>
  );
}
