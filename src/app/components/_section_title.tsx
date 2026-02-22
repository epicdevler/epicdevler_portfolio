import style from "@/app/styles/_section_title.module.css";
import { leckerliOne } from "@/app/fonts";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function SectionTitle({
  labelBehind,
  labelInFront,
  labelInFrontColor,
  labelInBehindColor,
}: {
  labelInFront: string;
  labelInFrontColor?: string;
  labelInBehindColor?: string;
  labelBehind?: string;
}) {
  return (
    <Box className={style.styled_title}>
      <Text
        fontSize={{ base: "8xl", md: "9xl" }}
        className={leckerliOne.className}
        color={labelInBehindColor}
        opacity={0.22}
      >
        {labelBehind}
      </Text>
      <Heading as={"h1"} color={labelInFrontColor}>
        {labelInFront}
      </Heading>
    </Box>
  );
}
