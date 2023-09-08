'use client'
import {Button, Container, Flex, HStack, Spacer, useColorMode,} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import NavLink from "@/app/components/_nav_link";
import "@theme-toggles/react/css/Around.css"
import {Around} from "@theme-toggles/react"

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <nav style={{padding: '10px 0px'}}>
            <Container maxW={'container.lg'}>
                <Flex alignItems={'center'}>
                    <HStack>
                        <SocialIcon iconUrl={'/icons/github.svg'} alt={'github x logo'}/>
                        <SocialIcon iconUrl={'/icons/linkedin.svg'} alt={'linkedin x logo'}/>
                        <SocialIcon iconUrl={'/icons/twitter_x.svg'} alt={'twitter x logo'}/>
                    </HStack>
                    <Spacer/>
                    <HStack hideBelow={"md"}>
                        <NavLink label={"Home"} isActive={true}/>
                        <NavLink label={"Projects"}/>
                        <NavLink label={"About"}/>
                        <NavLink label={"Contact"}/>
                    </HStack>
                    <Spacer/>
                    <HStack>
                        <Button hideBelow={"md"} borderRadius={100} fontWeight={500} bg={'brand'} borderWidth={0}
                                textColor={"white"}>
                            Hire Me
                        </Button>

                        <Around toggled={colorMode === 'light'} onToggle={toggleColorMode} style={{
                            borderRadius: 100,
                            border: "1px solid white",
                            color: "white",
                            padding: "9px",
                            fontSize: 22
                        }} duration={750}/>

                        <Button hideFrom={'md'} borderRadius={100} bg={'brand'} borderWidth={0} textColor={"white"}>
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </nav>
    )
}
