import SocialIcon from "@/app/components/_social_icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ComponentType, SVGProps } from "react";

export function ContactMeans({
  label,
  url,
  icon: iconUrl,
}: {
  label: string;
  url: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <Flex
      w="fit"
      pe={10}
      alignItems={"center"}
      mt={5}
      transition={"all .2s ease-in-out"}
      borderWidth={"thin"}
      borderStyle={"dashed"}
      borderColor={"bg"}
      _hover={{ borderColor: "border" }}
      asChild
    >
      <Link href={url} target={"_blank"}>
        <SocialIcon
          variant={"ghost"}
          borderWidth={"thin"}
          // href={url}
          icon={iconUrl}
          _hover={{ bg: "none" }}
        />

        <Text ms={"3"}>{label}</Text>
      </Link>
    </Flex>
  );
}
