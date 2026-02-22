import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MouseEventHandler } from "react";

export default function NavLink({
  label,
  href,
  isActive = false,
  isFirstChild = false,
  onClick = undefined,
}: {
  label: string;
  href: string;
  isActive?: boolean;
  isFirstChild?: boolean;
  onClick?: undefined | MouseEventHandler<HTMLParagraphElement>;
}) {
  return (
    <Box
      // className={` ${isActiveState}`}
      display={"flex"}
      flexDir={"column"}
      rounded={"full"}
    >
      <Text
        onClick={onClick}
        asChild
        style={{ padding: ".9em", color: "white" }}
        textAlign={"center"}
      >
        <Link href={href}>{label}</Link>
      </Text>
      <Box
        // className={`${style.line}`} /* bg={isActive ? 'white' :"transparent"} */
        bg="white"
        width={isActive ? "1/12": 0}
        mx={"auto"}
        h={1}
        rounded={"full"}
        transition={"width .2s ease-in-out"}
      />
    </Box>
  );
}
