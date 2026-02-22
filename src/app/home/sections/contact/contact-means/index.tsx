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
    <Flex alignItems={"center"} mt={5}>
      <SocialIcon
        variant={"outline"}
        borderWidth={"thin"}
        href={url}
        icon={iconUrl}
      />

      <Text asChild ms={"3"}>
        <Link href={url} target={"_blank"}>
          {label}
        </Link>
      </Text>
    </Flex>
  );
}
