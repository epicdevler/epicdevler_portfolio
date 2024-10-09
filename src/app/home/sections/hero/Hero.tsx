import Navbar from "@/app/home/navbar/_navbar";
import style from "./hero.module.css";
import { Container, HStack, Text } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Link from "next/link";
export default function HeroSection() {
  return (
    <header className={style.hero} id={"start"}>

      <div className={style.glass}>
        <Navbar />

        <Container maxW={"container.lg"} paddingY={100} textColor={"white"}>
          <SectionTitle labelBehind={"I am"} labelInFront={"Nwadike Philip"} />

          <Text fontSize='large' maxW={{base:'full', md:'md'}} className={style.brief_intro}>
            Inspired by passion, motivated for the future, building solutions to stand the test of time.
          </Text>
          <HStack mt={10} spacing={8}>
            <Text
              style={{
                fontWeight: 'normal',
                fontSize: '14px'
              }}
            >What are your <Link
              href={'#myStacks'}
              style={{
                fontWeight: '400',
                border: '1px solid white',
                borderRadius: '100px',
                padding: '5px'
              }}
            >
                stacks?
              </Link> </Text>
          </HStack>
        </Container>
      </div>
    </header>
  );
}
