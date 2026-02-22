import { IconButton, IconButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";

export default function SocialIcon({
  href,
  icon: iconUrl,
  alt = "",
  ...rest
}: {
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  alt?: string;
} & Omit<IconButtonProps, "children">) {
  const IconUrl = iconUrl;
  return (
    <IconButton
      variant={"ghost"}
      // borderColor={"whiteAlpha.400"}
      // color={"white"}
      rounded="full"
      aria-label={alt}
      _hover={{ bg: "bg.muted/20" }}
      asChild
      {...rest}
    >
      <Link href={href} target={"_blank"}>
        {IconUrl && <IconUrl />}
      </Link>
    </IconButton>
  );
}
