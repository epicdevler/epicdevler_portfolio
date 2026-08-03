"use client";
import NavigationBar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/provider";
import { Button, Center, Container, Heading, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
  const slug = usePathname();
  return (
    <ThemeProvider>
      <Container>
      <NavigationBar pos="relative" />

      <Center flexDir={"column"} py={200}>
        <Heading>Something went wrong</Heading>
        <Text>{error.message}</Text>

        <Button
          onClick={
            // Attempt to recover by re-fetching and re-rendering the segment
            () => unstable_retry()
          }
        >
          Try again
        </Button>
      </Center>
    </Container>
    </ThemeProvider>
  );
}
