"use client";
import NavLink from "@/app/components/_nav_link";
import SocialIcon from "@/app/components/_social_icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MouseEventHandler, useEffect, useState } from "react";
import style from "./_navbar.module.css";

import Container from "@/app/components/container";
import { leckerliOne } from "@/app/fonts";
import {
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";

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

export default function Navbar() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string>("");

  const scrollEvent = () => {
    const a = document.querySelectorAll(".observe_view");

    if (a.length === 0) {
      return;
    }

    a.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const elementTop = rect.top + 200;
      const elementBottom = rect.bottom;
      const isVisible = elementTop < windowHeight && elementBottom >= 0;
      if (isVisible) {
        setActiveSection(
          element.id === "stacks" || element.id === "work"
            ? "about"
            : element.id
        );
      }
    });
  };

  useEffect(() => {
    scrollEvent();
    // Initial check
    window.addEventListener("scroll", scrollEvent);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  const socialItems = [
    {
      url: "https://www.github.com/epicdevler",
      imgUrl: GithubIcon,
      imgAlt: "GitHub Logo",
      hoverBg: undefined,
      hoverContentColor: undefined,
    },
    {
      url: "https://www.linkedin.com/in/nwadikephilip",
      imgUrl: LinkedinIcon,
      imgAlt: "LinkedIn Logo",
      hoverBg: undefined,
      hoverContentColor: undefined,
    },
    {
      url: "https://www.twitter.com/epicdevler",
      imgUrl: TwitterIcon,
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
  }

  return (
    <Box
      as={"nav"}
      className={style.nav}
      w={"full"}
      py={4}
      px={3}
      // bg={{ base: "brand", lg: "none" }}
      // boxShadow={{ base: "md", lg: "none" }}
    >
      <FullScreenNav
        onToggle={isToggled}
        onNavItemClicked={handleNavItemClick}
        unToggle={handleNavToggle}
        activeSection={activeSection}
      />
      <Container
        boxShadow={{ base: "md", lg: "md" }}
        rounded={{ base: "full", lg: "full" }}
        dropShadow={"md"}
        bg={"brand"}
        py={{ mdDown: "2" }}
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
              const active = activeSection === link.label.toLocaleLowerCase();

              console.log("active", active, link.label, activeSection);
              return (
                <NavLink
                  key={link.label}
                  onClick={handleNavItemClick}
                  href={link.href}
                  label={link.label}
                  isFirstChild={index == 0}
                  isActive={active}
                />
              );
            })}
          </HStack>
          <HStack>
            <IconButton
              hideFrom={"md"}
              variant={"ghost"}
              rounded={"full"}
              _hover={{}}
              onClick={handleNavToggle}
              aria-label={"toggle icon"}
            >
              <MenuIcon />
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export function FullScreenNav({
  activeSection,
  onNavItemClicked,
  onToggle,
  unToggle,
}: {
  activeSection: string;
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
        color={"white"}
        _hover={{}}
        onClick={unToggle}
        aria-label={"toggle icon"}
        mb={4}
      >
        <XIcon />
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
              isActive={activeSection === link.label.toLocaleLowerCase()}
            />
          </Box>
        );
      })}
    </VStack>
  );
}
