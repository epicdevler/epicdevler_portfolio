import SocialIcon from "@/app/components/_social_icons";
import {
  Box,
  Container,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { leckerliOne } from "@/app/fonts";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";
import CurrentYear from "./current-date";

export default function Footer() {
  const socialItems = [
    {
      url: "https://www.github.com/epicdevler",
      imgUrl: LuGithub,
      imgAlt: "GitHub Logo",
    },
    {
      url: "https://www.linkedin.com/in/nwadikephilip",
      imgUrl: LuLinkedin,
      imgAlt: "LinkedIn Logo",
    },
    {
      url: "https://www.twitter.com/epicdevler",
      imgUrl: LuTwitter,
      imgAlt: "X Logo",
    },
  ];

  return (
    <Box
      as={"footer"}
      // className="fp-auto-height-responsive"
      py={3}
      bg={"brand"}
    >
      <Container maxW={"container.lg"} px={100} color={"white"}>
        <SimpleGrid
          hideBelow={"md"}
          columns={3}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <GridItem>
            <Text
              fontWeight={400}
              fontSize={14}
              textAlign={{ md: "center", lg: "left" }}
            >
              © 2023-
              <CurrentYear />
              <Text as={"span"} ms={1} className={leckerliOne.className}>
                aminnali
              </Text>
            </Text>
          </GridItem>
          <GridItem textAlign={"center"}>
            <Text fontWeight={500} fontSize={14} textAlign={"center"}>
              Made with ❤️
            </Text>
          </GridItem>
          <GridItem display={"flex"} justifyContent={"end"}>
            <HStack>
              {socialItems.map((item, index) => {
                return (
                  <SocialIcon
                    key={index}
                    color={"white"}
                    href={item.url}
                    icon={item.imgUrl}
                    alt={item.imgAlt}
                  />
                );
              })}
            </HStack>
          </GridItem>
        </SimpleGrid>

        <SimpleGrid
          hideFrom={"md"}
          columns={1}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <GridItem textAlign={"center"}>
            <Text fontWeight={500} fontSize={14} textAlign={"center"}>
              Made with ❤️
            </Text>
          </GridItem>
          <GridItem display={"flex"} justifyContent={"center"} my={6}>
            <HStack>
              {socialItems.map((item, index) => {
                return (
                  <SocialIcon
                    key={index}
                    href={item.url}
                    color={"white"}
                    icon={item.imgUrl}
                    alt={item.imgAlt}
                  />
                );
              })}
            </HStack>
          </GridItem>
          <GridItem>
            <Text fontWeight={400} fontSize={14} textAlign={"center"}>
              © 2023-
              <CurrentYear />
              <Text as={"span"} ms={1} className={leckerliOne.className}>
                aminnali
              </Text>
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
