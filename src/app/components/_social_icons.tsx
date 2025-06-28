import { IconButton } from "@chakra-ui/react";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";

export default function SocialIcon({
  href,
  iconUrl,
  alt = "",
  showBorder = false,
  hoverBg = "whiteAlpha.700",
  hoverContentColor = "black",
}: {
  href: string;
  iconUrl: ComponentType<SVGProps<SVGSVGElement>>;
  alt?: string;
  showBorder?: boolean;
  hoverBg?: string;
  hoverContentColor?: string;
}) {
  const IconUrl = iconUrl;
  return (
    <IconButton
      bg={"transparent"}
      borderWidth={showBorder ? 1 : 0}
      borderColor={"whiteAlpha.400"}
      color={"white"}
      padding={"4"}
      rounded="full"
      aria-label={alt}
      _hover={{ bg: hoverBg, color: hoverContentColor }}
      asChild
    >
      <Link href={href} target={"_blank"}>
        {IconUrl && <IconUrl />}
      </Link>
    </IconButton>
  );
}
