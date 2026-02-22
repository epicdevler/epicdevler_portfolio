"use client";
import NavLink from "@/app/components/_nav_link";
import SocialIcon from "@/app/components/_social_icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Separator,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import style from "./_navbar.module.css";

import Container from "@/app/components/container";
import { leckerliOne } from "@/app/fonts";
import { ColorModeButton } from "@/components/ui/color-mode";
import {
  GithubIcon,
  LinkedinIcon,
  MenuIcon,
  TwitterIcon,
  XIcon,
} from "lucide-react";
import useActiveSection from "@/app/hooks/useActiveSection";
import { LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

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

const socialItems = [
  {
    url: "https://www.github.com/epicdevler",
    imgUrl: LuGithub,
    imgAlt: "GitHub Logo",
    hoverBg: undefined,
    hoverContentColor: undefined,
  },
  {
    url: "https://www.linkedin.com/in/nwadikephilip",
    imgUrl: LuLinkedin,
    imgAlt: "LinkedIn Logo",
    hoverBg: undefined,
    hoverContentColor: undefined,
  },
  {
    url: "https://www.twitter.com/epicdevler",
    imgUrl: LuTwitter,
    imgAlt: "X Logo",
    hoverBg: undefined,
    hoverContentColor: undefined,
  },
];

export default function Navbar() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const forceCloseNav = useBreakpointValue({ base: false, md: true });

  const { activeSection } = useActiveSection();

  const handleNavToggle = () => setIsToggled(!isToggled);

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
      // bg='red'
      px={3}

      // bg={{ base: "brand", lg: "none" }}
      // boxShadow={{ base: "md", lg: "none" }}
    >
      <Container
        boxShadow={{ base: "md", lg: "md" }}
        rounded={"3xl"}
        dropShadow={"md"}
        bg={"brand"}
        py={{ mdDown: "2" }}
      >
        <Flex alignItems={"center"} gap={4} justifyContent={"space-between"}>
          <HStack>
            {socialItems.map((item, index) => {
              return (
                <SocialIcon
                  // hoverBg={item.hoverBg}
                  // hoverContentColor={item.hoverContentColor}
                  color={"white"}
                  key={index}
                  href={item.url}
                  icon={item.imgUrl}
                  alt={item.imgAlt}
                />
              );
            })}
          </HStack>
          <HStack hideBelow={"md"}>
            {navLinks.map((link, index) => {
              const active = activeSection === link.label.toLocaleLowerCase();
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

          <Separator />
          <HStack>
            <ColorModeButton
              rounded={"full"}
              _hover={{ bg: "bg.muted/20" }}
              color={"white"}
            />
            <IconButton
              hideFrom={"md"}
              variant={"ghost"}
              rounded={"full"}
              _hover={{ bg: "bg.muted/20" }}
              color="white"
              onClick={handleNavToggle}
              aria-label={"toggle icon"}
            >
              <MenuIcon />
            </IconButton>
          </HStack>
        </Flex>

        {!forceCloseNav && isToggled && (
          <FullScreenNav
            onToggle={isToggled}
            onNavItemClicked={handleNavItemClick}
            unToggle={handleNavToggle}
            activeSection={activeSection}
          />
        )}
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
      // aria-modal="true"
      // align={"end"}
      h={onToggle ? "fit" : 0}
      overflow={"hidden"}
      transition={"all .2s ease-in-out"}
      // hideFrom={"md"}
      // className={style.fullScreenNav}
      // style={{ scale: scale }}
      borderRadius={borderRadius}
      py={onToggle ? 3 : undefined}
      // px={3}
    >
      <IconButton
        variant={"ghost"}
        p={1}
        hidden
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
        hidden
        fontSize={"3xl"}
        className={leckerliOne.className}
        color={"white"}
      >
        epicdevler
      </Text>

      {navLinks.map((link) => {
        return (
          <Box key={link.label} width={"full"}>
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
