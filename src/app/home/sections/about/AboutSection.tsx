import {Box, Button, Container, Flex, Text} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";


const AboutSection = () => {


    return (
        <Box as={'section'} py={100} id={'about'}>
            <Box bg={'brand'} borderRadius={[50, 50, 100, 100]} py={16}>
                <Container maxW={'container.lg'} px={10}>
                    <Flex flexWrap={'wrap'}>
                        <Box maxW={'sm'}>
                            <SectionTitle labelInFrontColor={'white'} labelInFront={'About'} labelBehind={'Me'}/>
                            <Text fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}
                                  textColor={'white'}>
                                Lorem ipsum dolor sit amet consectetur. Eget lacinia nam at urna sed lectus. Nisl
                                habitant
                                placerat
                                neque donec aliquam bibendum tellus libero turpis. Turpis aliquam nullam venenatis
                                laoreet
                                suscipit
                                mattis duis venenatis iaculis. Viverra vitae mattis molestie enim nisl leo volutpat
                                ultricies.
                            </Text>

                            <Button bg={'white'} textColor={'brand'} borderRadius={'full'}>
                                Hire Me
                            </Button>
                        </Box>
                    </Flex>
                </Container>
            </Box>

        </Box>
    )
}

export default AboutSection