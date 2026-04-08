import { Center, Span, Spinner, Text } from "@chakra-ui/react";
import { leckerliOne } from "./fonts";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Center
      textAlign={"center"}
      flexDir={"column"}
      gap={"3"}
      h={"dvh"}
      bg={"bg.muted"}
    >
      <Spinner />
      <Text fontSize={"larger"}>
        Nwadike Philip{" "}
        <Span as={"span"} className={leckerliOne.className}>
          (epicdevler)
        </Span>
      </Text>
    </Center>
  );
}
