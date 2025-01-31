"use client";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import NavLink from "@/app/components/_nav_link";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./_navbar.module.css";
import { MouseEventHandler, useEffect, useState } from "react";

import { leckerliOne } from "@/app/fonts";
import { fullpageApi } from "@fullpage/react-fullpage";

const fullNavLinks = [
  {
    label: "Home",
    href: "",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Stacks",
    href: "#stacks",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const navLinks = fullNavLinks.filter((value) => {
  if (value.href != "#stacks" && value.href != "#experience") {
    return value;
  }
});

export default function Navbar({
  fullpageApi,
  fullpageSectionCount,
}: {
  fullpageApi: null | fullpageApi;
  fullpageSectionCount: number;
}) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const socialItems = [
    {
      url: "https://www.github.com/epicdevler",
      imgUrl: faGithub,
      imgAlt: "GitHub Logo",
      hoverBg: undefined,
      hoverContentColor: undefined,
    },
    {
      url: "https://www.linkedin.com/in/nwadikephilip",
      imgUrl: faLinkedinIn,
      imgAlt: "LinkedIn Logo",
      hoverBg: undefined,
      hoverContentColor: undefined,
    },
    {
      url: "https://www.twitter.com/epicdevler",
      imgUrl: faXTwitter,
      imgAlt: "X Logo",
      hoverBg: undefined,
      hoverContentColor: undefined,
    },
  ];

  const handleNavToggle = () => {
    setIsToggled(!isToggled);
  };

  function handleNavItemClick(event: {
    currentTarget: any;
    preventDefault: () => void;
  }) {
    const label = event.currentTarget.innerText;
    if (fullpageApi != null) {
      const sectionIndex = fullNavLinks.findIndex((value) => {
        return value.label == label;
      });
      fullpageApi?.moveTo(sectionIndex + 1);
    }
  }

  return (
    <Box
      as={"nav"}
      className={style.nav}
      w={"full"}
      py={4}
      bg={{ base: "brand", lg: "none" }}
      boxShadow={{ base: "md", lg: "none" }}
    >
      <FullScreenNav
        onToggle={isToggled}
        onNavItemClicked={handleNavItemClick}
        unToggle={handleNavToggle}
      />
      <Container
        boxShadow={{ base: "none", lg: "md" }}
        maxW={"container.lg"}
        rounded={{ base: "0", lg: "full" }}
        dropShadow={"md"}
        bg={"brand"}
      >
        <Flex alignItems={"center"} flexDirection={"row-reverse"}>
          <HStack>
            {socialItems.map((item, index) => {
              return (
                <SocialIcon
                  hoverBg={item.hoverBg}
                  hoverContentColor={item.hoverContentColor}
                  key={index}
                  href={item.url}
                  iconUrl={item.imgUrl}
                  alt={item.imgAlt}
                />
              );
            })}
          </HStack>
          <Spacer />
          <HStack hideBelow={"md"}>
            {navLinks.map((link, index) => {
              return (
                <NavLink
                  key={link.label}
                  onClick={handleNavItemClick}
                  href={link.href}
                  label={link.label}
                  isFirstChild={index == 0}
                  isActive={false /*fullpageSectionCount === index*/}
                />
              );
            })}
          </HStack>
          <HStack>
            {/* <Button hideBelow={"md"} borderRadius={100} fontWeight={500} bg={'brand'} borderWidth={0}
                                textColor={"white"}>
                            Hire Me
                        </Button> */}

            {/* <Around toggle={
                            (state) =>{
                                toggleColorMode()
                            }
                        }
                        forceMotion={true}
                         toggled={colorMode === 'light'} style={{
                            borderRadius: 100,
                            border: "1px solid white",
                            color: "white",
                            padding: "9px",
                            fontSize: 20
                        }} duration={750}/> */}

            <IconButton
              hideFrom={"md"}
              bg={"transparent"}
              borderRadius={100}
              borderWidth={1}
              borderColor={"white"}
              textColor={"white"}
              _hover={{}}
              onClick={handleNavToggle}
              aria-label={"toggle icon"}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export function FullScreenNav({
  onNavItemClicked,
  onToggle,
  unToggle,
}: {
  onToggle: boolean;
  unToggle: () => void;
  onNavItemClicked: MouseEventHandler<HTMLParagraphElement>;
}) {
  const [scale, setScale] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    const handleToggle = () => {
      setScale(onToggle ? 1 : 0);
      setBorderRadius(onToggle ? 0 : 8);
    };
    handleToggle();
  }, [onToggle]);

  return (
    <VStack
      aria-modal="true"
      align={"end"}
      backgroundColor={"brand"}
      hideFrom={"md"}
      className={style.fullScreenNav}
      style={{ scale: scale }}
      borderRadius={borderRadius}
      py={3}
      px={3}
    >
      <IconButton
        variant={"ghost"}
        p={1}
        rounded={"full"}
        textColor={"white"}
        _hover={{}}
        onClick={unToggle}
        aria-label={"toggle icon"}
        mb={4}
      >
        <FontAwesomeIcon fontSize={18} icon={faClose} />
      </IconButton>

      <Text
        w={"full"}
        textAlign={"center"}
        p={0}
        fontSize={"3xl"}
        className={leckerliOne.className}
        color={"white"}
      >
        epicdevler
      </Text>

      {navLinks.map((link) => {
        return (
          <Box key={link.label} width={"full"} textAlign={"center"}>
            <NavLink
              onClick={onNavItemClicked}
              label={link.label}
              href={link.href}
              isActive={false /*link.label === "Home"*/}
            />
          </Box>
        );
      })}
    </VStack>
  );
}
