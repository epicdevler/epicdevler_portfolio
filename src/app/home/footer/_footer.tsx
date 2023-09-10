'use client'
import {Box, Text, Container, Flex, HStack, Spacer, useColorMode, SimpleGrid, GridItem,} from "@chakra-ui/react";
import SocialIcon from "@/app/components/_social_icons";
import "@theme-toggles/react/css/Around.css"
import {faXTwitter, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
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
        <Box as={'footer'} py={3} bg={'brand'} mt={100} borderTopRadius={100}>
            <Container maxW={'container.lg'} px={100}>
                <SimpleGrid columns={{base: 1, sm: 3, md:3, lg: 3}} alignItems={'center'} justifyContent={'space-between'}>
                    <GridItem>
                        <Text
                            fontWeight={400}
                            fontSize={14}>
                            © 2023
                            <Text as={'span'} ms={1} className={leckerliOne.className}>
                                aminnali
                            </Text>
                        </Text>
                    </GridItem>
                   <GridItem  textAlign={'center'}>
                       <Text
                           fontWeight={500}
                           fontSize={14}
                           textAlign={'center'}
                       >
                           Made with ❤️
                       </Text>
                   </GridItem>
                    <GridItem  display={'flex'} justifyContent={'end'}>
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
            </Container>
        </Box>
    )
}
