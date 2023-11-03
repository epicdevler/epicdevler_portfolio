import { Box, Container, Flex, Text, useColorMode } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { WorkExperience } from "../../../../../sanity/schemas/workExperience";


const WorkSection = ({ data }: { data: WorkExperience[] }) => {

    const works = data

    const { colorMode } = useColorMode()

    return (
        <Box as={'section'} py={100}>
            <Container maxW={'container.lg'}>
                <SectionTitle labelInFront={'Experience'} labelBehind={'Work'} />
                <Text maxW={'lg'} fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}>
                    I have gained valueable insight colloborating with teams of different backgrounds within and outside an organization, national and internationally.
                </Text>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        works.map(
                            (work, index) => {
                                return <SwiperSlide key={index}>
                                    <Box w={'full'} py={50}>
                                        <Flex flexDirection={'column'} alignItems={'center'}>
                                            <Box p={5}>
                                                <Image
                                                    src={
                                                        colorMode === 'light' ? work.lightLogo : work.darkLogo == null ? work.lightLogo : work.darkLogo
                                                    }
                                                    width={150}
                                                    height={150}
                                                    alt={`${work.name} Logo`
                                                    }
                                                />
                                            </Box>

                                            <Text as={'a'} mt={5} href={work.websiteUrl} target={'_blank'}
                                                fontWeight={600}
                                                fontSize={24} textAlign={'center'} textDecoration={'underline'}>
                                                {work.name}
                                            </Text>

                                            <Text fontWeight={600} my={3} fontSize={18}>
                                                {work.role}
                                            </Text>

                                            <Text fontWeight={400} fontSize={14}>
                                                {work.duration}
                                            </Text>

                                        </Flex>
                                    </Box>
                                </SwiperSlide>
                            }
                        )
                    }
                </Swiper>

                <Box pt={100} hidden={true}>
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Box p={5} bg={colorMode === 'light' ? 'transparent' : 'rgba(192,192,192,0.84)'}
                            borderRadius={'full'}>
                            <Image src={'/work/cedars_logo.png'} width={150} height={150} alt={'Cedars Logo'} />
                        </Box>

                        <Text as={'a'} mt={5} href={'https://www.cedarsprohub.com'} target={'_blank'} fontWeight={600}
                            fontSize={24} textAlign={'center'} textDecoration={'underline'}>
                            Cedars Productivity Centre
                        </Text>

                        <Text fontWeight={600} my={3} fontSize={18}>
                            Android Developer
                        </Text>

                        <Text fontWeight={400} fontSize={14}>
                            2020 - 2023
                        </Text>

                    </Flex>
                </Box>
            </Container>
        </Box>

    )
}

export default WorkSection