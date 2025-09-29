import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MouseEventHandler } from "react";
import style from "@/app/styles/_nav_link.module.css";

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
  const isActiveState = isActive ? style.active : "";
  return (
    <Box
      className={`${style.list} ${isActiveState}`}
      borderColor={"white"}
      borderRadius={"full"}
    >
      <Text
        onClick={onClick}
        asChild
        style={{ padding: ".9em", color: "white" }}
      >
        <Link href={href}>{label}</Link>
      </Text>
      {
        <Box
          className={`${style.line}`} /* bg={isActive ? 'white' :"transparent"} */
        ></Box>
      }
    </Box>
  );
}
