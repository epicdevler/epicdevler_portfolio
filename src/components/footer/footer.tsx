import { Box, Container, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";
import { NavItem } from "../navbar/NavItem";
import { navItems } from "../navbar/navItems";
import { SiteConfig } from "@/site-config";

export default function Footer() {
  return (
    <Box as="footer" bg="bg.muted">
      <Container py={20}>
        <HStack flexWrap={"wrap"} gap={20}>
        <Box maxW={"md"}>
          <Heading>{SiteConfig.name}</Heading>
          <Text mt={4} fontSize={"sm"} color="fg.muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            earum cum nihil cumque aliquid blanditiis necessitatibus qui
            voluptates deleniti odio! Delectus asperiores autem iusto, sint
            adipisci dignissimos enim in beatae.
          </Text>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} gap={5} flex={1}>
          <NavSection label="Explore" items={navItems} />
          <NavSection label="Others" items={navItems} />
          <NavSection label="Others" items={navItems} />
        </SimpleGrid>
      </HStack>
      </Container>
    </Box>
  );
}

function NavSection({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <Box >
      <Text mb={5} textTransform={"capitalize"}>{label}</Text>

      <Box as="ul" spaceY={4}>
        {items.map((item) => {
        if (!item.href) return null;
        return (
          <Text key={item.href + item.label} as="li" color="fg.muted">
            <Link href={item.href}>{item.label}</Link>
          </Text>
        );
      })}
      </Box>
    </Box>
  );
}
