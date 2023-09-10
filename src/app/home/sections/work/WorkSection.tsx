import {Box, Button, Container, Flex, Text, useColorMode} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Image from 'next/image'


const WorkSection = () => {

    const {colorMode} = useColorMode()

    return (
            <Container as={'section'} maxW={'container.lg'} py={100}>
                <SectionTitle labelInFront={'Experience'} labelBehind={'My Job'}/>
                <Text maxW={'lg'} fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}>
                    Lorem ipsum dolor sit amet consectetur. Eget lacinia nam at urna sed lectus. Nisl habitant
                    placerat neque donec aliquam bibendum tellus libero turpis.
                </Text>
                <Box pt={100}>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Box p={5} bg={colorMode === 'light' ? 'transparent' : 'rgba(192,192,192,0.84)'} borderRadius={'full'}>
                            <Image src={'/work/cedars_logo.png'} width={150} height={150} alt={'Cedars Logo'} />
                        </Box>

                        <Text as={'a'} mt={5} href={'https://www.cedarsprohub.com'} target={'_blank'} fontWeight={600} fontSize={24} textDecoration={'underline'} >
                            Cedars Productivity Centre
                        </Text>

                        <Text fontWeight={600} my={3} fontSize={18} >
                            Android Developer
                        </Text>

                        <Text fontWeight={400} fontSize={14} >
                            2020 - 2023
                        </Text>

                    </Flex>
                </Box>
            </Container>

    )
}

export default WorkSection