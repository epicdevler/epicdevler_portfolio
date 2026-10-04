"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import {
  Box,
  Button,
  Link as ChakraLink,
  CloseButton,
  Drawer,
  IconButton,
  Portal,
  Stack,
  type IconButtonProps,
} from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, type MouseEvent } from "react";
import { NAV_CTA, NAV_ITEMS, NAV_SECTION_IDS } from "./nav-items";

/** Plain primary-button click with no modifier (new tab etc. stay native). */
const isPlainClick = (event: MouseEvent<HTMLAnchorElement>) =>
  event.button === 0 &&
  !event.metaKey &&
  !event.ctrlKey &&
  !event.shiftKey &&
  !event.altKey;

/**
 * Below-md menu: an IconButton that opens a Chakra Drawer with the section
 * links and CTA. Focus is trapped while open and restored to the trigger on
 * close. Link clicks close the drawer first and navigate once it has fully
 * exited, so the scroll lock is released before scrolling to the anchor.
 */
export function MobileNavMenu(
  triggerProps: Omit<IconButtonProps, "aria-label">,
) {
  const [open, setOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const router = useRouter();
  const active = useActiveSection(NAV_SECTION_IDS);

  const handleLinkClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      if (!isPlainClick(event)) return;
      event.preventDefault();
      pendingHref.current = href;
      setOpen(false);
    };

  const handleExitComplete = () => {
    const href = pendingHref.current;
    pendingHref.current = null;
    if (href) router.push(href);
  };

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
      onExitComplete={handleExitComplete}
      placement="end"
      size={{ base: "full", sm: "sm" }}
    >
      <Drawer.Trigger asChild>
        <IconButton
          aria-label="Open menu"
          variant="ghost"
          color="fg"
          size="md"
          {...triggerProps}
        >
          <LuMenu aria-hidden />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop _motionReduce={{ animation: "none" }} />
        <Drawer.Positioner>
          <Drawer.Content
            bg="bg.canvas"
            color="fg"
            _motionReduce={{ animation: "none" }}
          >
            <Drawer.Header
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px="gutter"
              py="16px"
              borderBottomWidth="1px"
              borderColor="border.subtle"
            >
              <Drawer.Title
                display="flex"
                alignItems="center"
                gap="10px"
                fontWeight="600"
                fontSize="16px"
                letterSpacing="-0.01em"
              >
                <Box as="span" aria-hidden boxSize="10px" bg="bg.accent" rounded={"full"} hidden />
                Menu
              </Drawer.Title>
              <Drawer.CloseTrigger asChild position="static">
                <CloseButton aria-label="Close menu" size="md" />
              </Drawer.CloseTrigger>
            </Drawer.Header>

            <Drawer.Body px="gutter" py="32px">
              <nav aria-label="Primary mobile">
                <Stack as="ul" listStyleType="none" gap="0">
                  {NAV_ITEMS.map((item) => {
                    const isActive = active === item.sectionId;
                    return (
                      <Box
                        as="li"
                        key={item.href}
                        borderBottomWidth="1px"
                        borderColor="border"
                      >
                        <ChakraLink
                          asChild
                          variant="nav"
                          display="flex"
                          alignItems="center"
                          gap="14px"
                          py="16px"
                          fontSize="clamp(24px, 6vw, 32px)"
                          fontWeight="500"
                          letterSpacing="-0.03em"
                          lineHeight="1.1"
                        >
                          <NextLink
                            href={item.href}
                            onClick={handleLinkClick(item.href)}
                            aria-current={isActive ? "location" : undefined}
                          >
                            {item.label}
                            {/* Decorative active marker (matches the logo
                                square); aria-current carries the meaning. */}
                            {isActive && (
                              <Box
                                as="span"
                                aria-hidden
                                flexShrink={0}
                                boxSize="8px"
                                bg="bg.accent"
                                rounded={"full"}
                              />
                            )}
                          </NextLink>
                        </ChakraLink>
                      </Box>
                    );
                  })}
                </Stack>
              </nav>

              <Button asChild variant="solid" size="lg" mt="32px" w="full">
                <NextLink
                  href={NAV_CTA.href}
                  onClick={handleLinkClick(NAV_CTA.href)}
                >
                  {NAV_CTA.label}
                </NextLink>
              </Button>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
