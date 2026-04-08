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
      bg={"bg.muted"}
      borderTopWidth={"thin"}
    >
      <Container maxW={"container.lg"} px={[4, null, 100]}>
        <SimpleGrid
          // hideBelow={"md"}
          columns={[2, null, 3]}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={4}
        >
          <GridItem>
            <Text fontWeight={400} textAlign={["center", null, "left"]}>
              © 2023-
              <CurrentYear />
              <Text as={"span"} ms={1} className={leckerliOne.className}>
                aminnali
              </Text>
            </Text>
          </GridItem>
          <GridItem textAlign={["right", null, "center"]}>
            <Text fontWeight={500} fontSize={14}>
              Made with ❤️
            </Text>
          </GridItem>
          <GridItem display={"flex"} justifyContent={["center", null, "end"]}>
            <HStack>
              {socialItems.map((item, index) => {
                return (
                  <SocialIcon
                    key={index}
                    href={item.url}
                    icon={item.imgUrl}
                    alt={item.imgAlt}
                  />
                );
              })}
            </HStack>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
