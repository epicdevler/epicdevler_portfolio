'use client'
import {Box, Container, GridItem, HStack, SimpleGrid, Text, useColorMode,} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import {faGithub, faLinkedinIn, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {leckerliOne} from "@/app/fonts";

export default function Footer() {
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

    return (
        <Box as={'footer'} className="fp-auto-height-responsive" py={3} bg={'brand'} >
            <Container maxW={'container.lg'} px={100} textColor={'white'}>
                <SimpleGrid hideBelow={'md'}  columns={3} alignItems={'center'}
                            justifyContent={'space-between'}>
                    <GridItem>
                        <Text
                            fontWeight={400}
                            fontSize={14}
                            textAlign={{md: 'center', lg: 'left'}}
                        >
                            © 2023
                            <Text as={'span'} ms={1} className={leckerliOne.className}>
                                aminnali
                            </Text>
                        </Text>
                    </GridItem>
                    <GridItem textAlign={'center'}>
                        <Text
                            fontWeight={500}
                            fontSize={14}
                            textAlign={'center'}
                        >
                            Made with ❤️
                        </Text>
                    </GridItem>
                    <GridItem display={'flex'} justifyContent={'end'}>
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
                    </GridItem>
                </SimpleGrid>


                <SimpleGrid hideFrom={'md'} columns={1} alignItems={'center'}
                            justifyContent={'center'}>
                    <GridItem textAlign={'center'}>
                        <Text
                            fontWeight={500}
                            fontSize={14}
                            textAlign={'center'}
                        >
                            Made with ❤️
                        </Text>
                    </GridItem>
                    <GridItem display={'flex'} justifyContent={'center'} my={6} >
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
                    </GridItem>
                    <GridItem>
                        <Text
                            fontWeight={400}
                            fontSize={14}
                            textAlign={'center'}
                        >
                            © 2023
                            <Text as={'span'} ms={1} className={leckerliOne.className}>
                                aminnali
                            </Text>
                        </Text>
                    </GridItem>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
