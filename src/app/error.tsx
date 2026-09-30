"use client";
import { Navbar } from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/components/provider";
import { Button, Center, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import SystemTheme from "./theme/theme";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
          Something went wrong
        </Heading>
        <Text color="fg.muted">{error.message}</Text>
        <Button variant="solid" size="lg" onClick={() => unstable_retry()}>
          Try again
        </Button>
      </Center>
    </ThemeProvider>
  );
}
