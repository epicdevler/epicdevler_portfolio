import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Container,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { navItems } from "./navItems";
import { SiteConfig } from "@/site-config";
import Image from "next/image";

export default function NavigationBar(props: BoxProps) {
  return (
    <Box as={"nav"} asChild p={4} {...props}>
      <Container>
        <HStack pos="relative" justifyContent={"space-between"}>
          <Heading as="h1">
            {SiteConfig.logo.iconOnly ? (
              <Image
                src={SiteConfig.logo.iconOnly}
                alt=""
                width={100}
                height={100}
              />
            ) : (
              SiteConfig.name
            )}
          </Heading>
          <HStack
            as="ul"
            pos="absolute"
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          >
            {navItems.map((item) => {
              return (
                <Button
                  key={item.href + item.label}
                  as="li"
                  asChild
                  variant={"ghost"}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              );
            })}
          </HStack>
          <ButtonGroup>
            <Button colorPalette={"orange"}>Action</Button>
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  );
}
