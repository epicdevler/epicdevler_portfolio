import Navbar from "@/app/home/navbar/_navbar";
import style from "./hero.module.css";
import { Center, Container, Heading, HStack, Text } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Link from "next/link";
export default function HeroSection() {
  return (
    <header className={`section ${style.hero}`} id={"start"}>

      <div className={style.glass}>       

        <Container maxW={"container.lg"} pb={100} pt={170} textAlign={'center'} textColor={"white"} as={Center} flexDir={'column'}>
          <Heading as={'h1'} size='3xl' maxW={'3xl'}>
            Passionately Developing Apps That Improves Lives 
            {/* Apps that improve lives */}
          </Heading>
          <Text mt={7} textColor={'whiteAlpha.800'} fontSize='medium' maxW={{base:'full', md:'md'}} className={style.brief_intro}>
            Inspired by passion, motivated for the future, building solutions to stand the test of time.
          </Text>
          <HStack mt={7} spacing={7}>
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
