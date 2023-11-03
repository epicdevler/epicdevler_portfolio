import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Image from "next/image";
import epicdevlerImg from '../../../../../public/epicdevler.png'
import Link from "next/link";


const AboutSection = () => {


    return (
        <Box as={'section'} py={100} >
            <Box bg={'brand'} borderRadius={[50, 50, 100, 100]} py={16}>
                <Container maxW={'container.lg'} px={10}>

                    <div id={'about'}>
                        <SectionTitle labelInFrontColor={'white'} labelInFront={'About'} labelBehind={'Me'} />
                    </div>
                    <Flex flexWrap={'wrap-reverse'} alignItems={'center'} justifyContent={'space-between'} >
                        <Box maxW={'sm'}>

                            <Text as={'p'} fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}
                                textColor={'white'}>
                                {
                                    `I'm a Web developer and Mobile App Developer with experience in designing new features from ideation to high performance software applications. I take into consideration the user experience while writing reusable, scalable and efficient code. I passionately combine good design, technology, and innovation in all my projects. I'm mainly focused on  Mobile App Development with Kotlin and Jetpack Compose.`
                                }
                            </Text>

                            <Link
                                href={"#contact"}
                                style={{
                                    padding: '10px',
                                    borderRadius: '100px',
                                    border: '1px solid white'
                                }}
                            >
                                Contact Me
                            </Link>
                        </Box>

                        <Box
                            marginY={{ base: 16, md: '0' }}
                            width={{ base: '250px', sm: '350px' }}
                            aspectRatio={'1'}
                            mx={{ base: 'auto', lg: '0' }}
                            

                        >
                            <Image
                                src={epicdevlerImg}
                                alt=""
                                style={{
                                    borderRadius: '100%',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>

        </Box >
    )
}

export default AboutSection