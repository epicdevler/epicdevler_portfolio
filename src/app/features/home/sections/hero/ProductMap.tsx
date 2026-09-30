import { Box, VisuallyHidden } from "@chakra-ui/react";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCT_MAP_STAGES } from "./hero-content";
import { ProductMapCanvas } from "./ProductMapCanvas";
import {
  DataCard,
  DeliveryCard,
  InterfaceCard,
  ProblemCard,
  ProductCard,
  SystemCard,
} from "./ProductMapCards";

const CARDS = [
  <ProblemCard key="problem" />,
  <ProductCard key="product" />,
  <InterfaceCard key="interface" />,
  <SystemCard key="system" />,
  <DataCard key="data" />,
  <DeliveryCard key="delivery" />,
] as const;

/** Dark "product map" panel shown full-width below the hero copy. */
export function ProductMap() {
  return (
    <Reveal
      mt="clamp(48px, 6vw, 88px)"
      bg="bg.inverted"
      color="fg.inverted"
      borderRadius="canvas"
      p="clamp(16px, 2vw, 24px)"
      shadow="canvas"
      minW="0"
    >
      <VisuallyHidden as="div">
        <p>How I take a product from idea to delivery:</p>
        <Box as="ol">
          {PRODUCT_MAP_STAGES.map((stage) => (
            <li key={stage.name}>{stage.summary}</li>
          ))}
        </Box>
      </VisuallyHidden>
      <ProductMapCanvas cards={CARDS} />
    </Reveal>
  );
}
