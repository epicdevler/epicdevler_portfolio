import {Box, Container, Flex, Text, useColorMode} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper/modules';
import {WorkExperience} from "../../../../../sanity/schemas/workExperience";

type Work = {
    name: 'string',
    role: string,
    websiteUrl: string,
    duration: string,
}


const WorkSection = ({data}: { data: WorkExperience[] }) => {

    const works = data
    const {colorMode} = useColorMode()

    return (
        <Box id={'work'} as={'section'} py={100}>
            <Container maxW={'container.lg'}>
                <SectionTitle labelInFront={'Experience'} labelBehind={'Work'}/>
                <Text maxW={'lg'} fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}>
                    Lorem ipsum dolor sit amet consectetur. Eget lacinia nam at urna sed lectus. Nisl habitant
                    placerat neque donec aliquam bibendum tellus libero turpis.
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


            </Container>
        </Box>

    )
}

export default WorkSection