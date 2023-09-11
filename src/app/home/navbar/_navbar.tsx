'use client'
import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import NavLink from "@/app/components/_nav_link";
import "@theme-toggles/react/css/Around.css"
import {Around} from "@theme-toggles/react"
import {faGithub, faLinkedinIn, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import {useGlobalNavbarStateContext} from "@/app/context/_navbar_state_context";
import style from './_navbar.module.css'
import {useEffect, useState} from "react";


const navLinks = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Contact',
        href: '#contact'
    },
]

export default function Navbar() {
    const {toggle} = useGlobalNavbarStateContext()
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
                        {
                            navLinks.map(
                                link => {
                                    return <NavLink key={link.label} href={link.href} label={link.label}
                                                    isActive={link.label === "Home"}/>
                                }
                            )
                        }

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
                                    borderColor={'white'} textColor={"white"} _hover={{}} onClick={handleNavToggle}
                                    aria-label={'toggle icon'}>
                            <FontAwesomeIcon icon={faBars}/>
                        </IconButton>
                    </HStack>
                </Flex>
            </Container>
        </nav>
    )
}


export function FullScreenNav() {
    const bgColor = useColorModeValue('rgba(145,145,145,0.5)', 'rgba(30,31,34,0.5)')
    const textColor = useColorModeValue('rgba(37,37,37,0.5)', 'rgba(180,180,180,0.5)')
    const {isToggled, toggle} = useGlobalNavbarStateContext()
    const [scale, setScale] = useState(0)
    const [borderRadius, setBorderRadius] = useState(0)


    useEffect(() => {
        const handleToggle = () => {
            setScale(isToggled ? 1 : 0)
            setBorderRadius(isToggled ? 0 : 8)
        }
        handleToggle()
    }, [isToggled]);

    const handleOnClose = () => {
        toggle()
    }

    return (

        <VStack align={'end'} bg={bgColor} hideFrom={'md'} className={style.fullScreenNav} style={{scale: scale}}
                borderRadius={borderRadius} p={10}>
            <IconButton hideFrom={'md'} bg={'transparent'} borderRadius={100} borderWidth={1}
                        borderColor={'white'} textColor={"white"} _hover={{}} onClick={handleOnClose}
                        aria-label={'toggle icon'} mb={10}>
                <FontAwesomeIcon icon={faClose}/>
            </IconButton>

            {
                navLinks.map(
                    link => {
                        return <Box width={'full'} textAlign={'center'}>
                            <NavLink key={link.label} label={link.label} href={link.href}
                                     isActive={link.label === "Home"}/>
                        </Box>
                    }
                )
            }

        </VStack>
    )
}