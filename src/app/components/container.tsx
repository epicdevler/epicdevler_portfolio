import { ContainerProps, Container as ChakraContainer } from "@chakra-ui/react";

export default function Container(props: ContainerProps) {
  return (
    <ChakraContainer {...props} maxW={"6xl"}>
      {props.children}
    </ChakraContainer>
  );
}
