import { Box, Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Image from "next/image";
import epicdevlerImg from "../../../../../public/epicdevler.png";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Box id="about" as={"section"} bg={"blackAlpha.900"} className="section">
      <Container maxW={"container.lg"} py={100} px={10}>
        <Flex
          flexWrap={"wrap-reverse"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            as={motion.div}
            initial={{
              x: -150,
            }}
            whileInView={{
              x: 0,
            }}
            maxW={"lg"}
          >
            <SectionTitle
              labelInBehindColor="white"
              labelInFrontColor={"brand"}
              labelInFront={"About"}
              labelBehind={"Me"}
            />
            <Text
              as={"p"}
              fontWeight={400}
              lineHeight={"28px"}
              my={"24px"}
              fontSize={"14px"}
              textColor={"white"}
            >
              {`I'm a Web developer and Mobile App Developer with experience in designing new features from ideation to high performance software applications. I take into consideration the user experience while writing reusable, scalable and efficient code. I passionately combine good design, technology, and innovation in all my projects. I'm mainly focused on  Mobile App Development with Kotlin and Jetpack Compose.`}
            </Text>
            <motion.div whileTap={{ scale: 0.9 }} style={{width:'fit-content'}}>
              <Button
                p={7}
                fontWeight={"normal"}
                bg={"transparent"}
                _hover={{ bg: "brand" }}
                as={Link}
                href={"#contact"}
                rounded={"full"}
                borderWidth={1}
                borderColor={"white"}
                textColor={"white"}
              >
                Contact Me
              </Button>
            </motion.div>
          </Box>

          <Box
            as={motion.div}
            initial={{
              x: 150,
            }}
            whileInView={{
              x: 0,
            }}
            marginY={{ base: 16, md: "0" }}
            width={{ base: "250px", sm: "350px" }}
            aspectRatio={"1"}
            mx={{ base: "auto", lg: "0" }}
          >
            <Image
              src={epicdevlerImg}
              alt=""
              style={{
                borderRadius: "100%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AboutSection;
