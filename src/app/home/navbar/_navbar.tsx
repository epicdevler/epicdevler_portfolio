'use client'
import {Button, Container, Flex, HStack, IconButton, Spacer, useColorMode,} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import NavLink from "@/app/components/_nav_link";
import "@theme-toggles/react/css/Around.css"
import {Around} from "@theme-toggles/react"
import {faGithub, faLinkedinIn, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {useGlobalNavbarStateContext} from "@/app/page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";

export default function Navbar() {
    const {isToggled, toggle} = useGlobalNavbarStateContext()
    const {colorMode, toggleColorMode} = useColorMode()

    const socialItems = [
        {
            url: "https://www.github.com/epicdevler",
            imgUrl: faGithub,
            imgAlt: "GitHub Logo",
        },
        {
            url: "https://www.linkedin.com/in/nwadikephilip",
            imgUrl: faLinkedinIn,
            imgAlt: "LinkedIn Logo",
        },
        {
            url: "https://www.twitter.com/epicdevler",
            imgUrl: faXTwitter,
            imgAlt: "X Logo",
        },
    ]

    const handleNavToggle = () => {
        toggle()
    }
    return (
        <nav style={{padding: '10px 0px'}}>
            <Container maxW={'container.lg'}>
                <Flex alignItems={'center'}>
                    <HStack>
                        {
                            socialItems.map(
                                (item, index) => {
                                    return <SocialIcon key={index} href={item.url} iconUrl={item.imgUrl}
                                                       alt={item.imgAlt}/>
                                }
                            )
                        }
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
                            fontSize: 20
                        }} duration={3000}/>

                        <IconButton hideFrom={'md'} bg={'transparent'} borderRadius={100} borderWidth={1}
                                    borderColor={'white'} textColor={"white"} _hover={{}} onClick={handleNavToggle}>
                            <FontAwesomeIcon icon={faBars}/>
                        </IconButton>
                    </HStack>
                </Flex>
            </Container>
        </nav>
    )
}
