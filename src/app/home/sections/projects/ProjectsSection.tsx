'use client'
import { Button, Container, Flex, GridItem, SimpleGrid, Text, Box } from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import { useEffect, useState } from "react";
import { jua } from "@/app/fonts";
import Link from "next/link";
import { Project } from "@/data/data/appData";



const _projects: Project[] = [
    {
        type: "Android",
        title: "Aminote (minote)",
        startDate: "Aug 2022",
        endDate: "Continues Development",
        imgUrl: "/projects/minote_graphics.png",
        alt: "Aminote Image Graphic",
        descr: "",
        githubUrl: "https://github.com/epicdevler/aminote.git",
        link: "",
    },
    {
        type: "Web",
        title: "FoodApp | Resturant Ordering System",
        startDate: "Aug 2023",
        endDate: "Nov 2023",
        imgUrl: "/projects/foodApp_graphics.png",
        alt: "FoodApp Image Graphic",
        descr: "",
        githubUrl: "https://github.com/epicdevler/csp-foodapp.git",
        link: "https://decutleries.vercel.app/",
    }
]

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [projectFilterOptions, setProjectFilterOptions] = useState<string[]>([])

    useEffect(() => {
        const _filterOptions: string[] = ["All"]
        const types = _projects.map(
            value => {
                return value.type
            }).sort()

        for (let index = 0; index < types.length; index++) {
            const element = types[index];
            if (index == 0 || index > 0 && element !== types[index - 1]) {
                _filterOptions.push(element)
            }
        }
        setProjectFilterOptions(_filterOptions)
    }, [])

    const [projects, setProjects] = useState(_projects);

    const handleProjectFiltering = (by: string) => {
        setActiveFilter(by)
        const filtered = _projects.filter(
            project => {
                return by === projectFilterOptions[0] ? true : project.type == by
            }
        )
        setProjects(filtered)

    }

    return (
        <Box id="projects" as={'section'} h='full' bg={'blackAlpha.900'} className="section">
        <Container as={'section'}  maxW={'container.lg'} py={100}>
            <Box textColor='white'>
                <SectionTitle  labelInFrontColor={'brand'} labelInFront={'Projects'} labelBehind={'My'} />
            </Box>
            <Text fontWeight={400} textColor={'whiteAlpha.900'} lineHeight={'28px'} my={'24px'} fontSize={'14px'}>
                This endeavor was more than just lines of code; it was a passionate exploration of possibilities. Iterative development and adaptability are the cornerstones that keep us on the cutting edge.
                Integration of diverse technical skills from front-end to back-end collectively brings together a spectrum of talents to ensure comprehensive and efficient development.
            </Text>

            <Flex
                borderBottom={'1px'}
                borderColor={'brand'}
                borderRadius={'full'}
                maxW={'sm'}
                w={'fit-content'}
                my={'52px'}
            >
                {
                    projectFilterOptions.map(
                        (filterOption, index) => {
                            return <Button
                                key={index}
                                borderRadius={'full'}
                                p={'16px'}
                                bg={activeFilter === filterOption ? 'brand' : 'transparent'}
                                fontWeight={500}
                                fontSize={'14px'}
                                _hover={{}}
                                textColor={activeFilter === filterOption ? 'white' : '#636363'}
                                px={'16px'}
                                style={{ transition: 'All .1s ease-in-out' }}
                                onClick={
                                    (e) => {
                                        handleProjectFiltering(filterOption)
                                    }
                                }
                            >{filterOption}</Button>
                        }
                    )
                }
            </Flex>

            <SimpleGrid columns={{ base: 1, sm:2, md: 2, lg: 2 }} gap={5}>
                {
                    projects.length > 0 ?
                        projects.map(
                            (project, index) => {
                                return <GridItem
                                    w='full'
                                    key={index}
                                    role="group"
                                >
                                    <Box
                                        w='full'
                                        backgroundImage={`url(${project.imgUrl})`}
                                        backgroundPosition={'center'}
                                        backgroundSize={'cover'}
                                        borderRadius={'8px'}                                        
                                    >

                                        <Flex
                                            w='full'
                                            bg='red'
                                            alignItems={'start'}
                                            transitionProperty={'background'}
                                            transitionDuration={'.5s'}
                                            _hover={{
                                                backdropFilter: 'blur(0px)',                                                
                                            }}
                                            borderRadius={'8px'}
                                            flexDirection={'column'}
                                            justifyContent={'space-between'}
                                            p={'10px'}
                                            h={'290px'}
                                            backdropFilter={'blur(2px)'}
                                            background={'linear-gradient(180deg, rgb(0 0 0 / 39%) 17.71%, rgb(0 0 0 / 76%) 71.87%)'}>
                                            <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                                fontWeight={'300'}>{project.type}</Text>
                                            <Box w={'full'}>
                                                <Text w='full' className={jua.className} mb={'16px'} fontSize={'16px'}
                                                    fontWeight={400}
                                                    textColor={'white'}>
                                                    {project.title}
                                                </Text>
                                                <Flex w='full' justifyContent={'space-between'}>
                                                    {
                                                        project.startDate !== "" ?
                                                            <div >
                                                                <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                                                    fontWeight={'300'}>Start</Text>
                                                                <Text textColor={'white'} fontWeight={'300'}
                                                                    fontSize={'12px'}>{project.startDate}</Text>
                                                            </div>
                                                            :
                                                            <></>
                                                    }
                                                    {
                                                        project.endDate !== "" ?
                                                            <div className="mt-5">
                                                                <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                                                    fontWeight={'300'}>End</Text>

                                                                <Text
                                                                    textColor={'white'}
                                                                    fontWeight={'300'}
                                                                    fontSize={'12px'}>
                                                                    {project.endDate}

                                                                </Text>
                                                            </div>
                                                            :
                                                            <></>
                                                    }
                                                </Flex>
                                            </Box>
                                        </Flex>
                                    </Box>
                                    <Flex
                                        mt="5"
                                    >
                                        {
                                            project.link !== "" ?
                                                <Button
                                                py={4}
                                                px={6}
                                                _hover={{bg:'brand', borderColor:'brand'}}
                                                textColor={'white'}
                                                transitionDuration={'.3s'}
                                                borderWidth={1}
                                                borderColor={'white'}
                                                bg={'transparent'}
                                                 fontWeight={'normal'} fontSize={'14'} me='2' borderRadius={'full'}  as={Link} target='_blank' href={project.link!!}>
                                                    View
                                                </Button>
                                                : <></>
                                        }
                                        {
                                            project.githubUrl !== "" ?
                                                <Button
                                                py={4}
                                                px={6}
                                                bg={'transparent'}
                                                _hover={{bg:'brand', borderColor:'brand'}}
                                                textColor={'white'}
                                                transitionDuration={'.3s'}
                                                borderWidth={1}
                                                borderColor={'white'}
                                                 fontWeight={'normal'} fontSize={'14'} borderRadius={'full'}  as={Link} target='_blank' href={project.githubUrl}>
                                                    GitHub
                                                </Button>
                                                : <></>
                                        }
                                    </Flex>
                                </GridItem>
                            }
                        )
                        :
                        <Text>
                            No Projects Yet
                        </Text>
                }
            </SimpleGrid>

        </Container>
        </Box>
    )
}

export default ProjectsSection