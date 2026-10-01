import { Box, VisuallyHidden } from "@chakra-ui/react";
import { Reveal } from "@/components/motion/Reveal";
import { PRODUCT_MAP_STAGES } from "./hero-content";
import { ProductMapCanvas, type ProductMapCardEntry } from "./ProductMapCanvas";
import {
  DataCard,
  DeliveryCard,
  InterfaceCard,
  InterfaceCardAside,
  ProblemCard,
  ProductCard,
  SystemCard,
} from "./ProductMapCards";

const CARDS: readonly ProductMapCardEntry[] = [
  { body: <ProblemCard /> },
  { body: <ProductCard /> },
  { body: <InterfaceCard />, labelAside: <InterfaceCardAside /> },
  { body: <SystemCard /> },
  { body: <DataCard /> },
  { body: <DeliveryCard /> },
];

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
