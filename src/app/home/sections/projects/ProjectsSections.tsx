import {Button, Container, Flex, GridItem, SimpleGrid, Text} from "@chakra-ui/react";
import SectionTitle from "@/app/components/_section_title";
import {useState} from "react";
import {jua} from "@/app/fonts";

const sampleProject = {
    id: "0",
    type: "Android",
    title: "Aminote (minote)",
    startDate: "Aug 2023",
    imgUrl: "/project_sample_graphic.png",
    endDate: "",
}
const _projects = [
    sampleProject,
    sampleProject,
    sampleProject,
    {
        id: "1",
        type: "Web",
        title: "Web Project",
        startDate: "Some Date",
        imgUrl: "",
        endDate: "",
    },
    {
        id: "2",
        type: "Web",
        title: "Web Project",
        startDate: "Some Date",
        imgUrl: "",
        endDate: "",
    },
    {
        id: "3",
        type: "UI/UX",
        title: "epicdevler's Portfolio",
        startDate: "Some Date",
        imgUrl: "",
        endDate: "",
    },
    {
        id: "4",
        type: "Backend",
        title: "epicdevler's Portfolio",
        startDate: "Some Date",
        imgUrl: "",
        endDate: "",
    },
]

const ProjectsSections = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const projectFilterOptions = ['All', 'Android', 'Web', 'Database', 'UI/UX']
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
        <Container as={'section'} maxW={'container.lg'} py={100}>
            <SectionTitle labelInFrontColor={'brand'} labelInFront={'Projects'} labelBehind={'My'}/>
            <Text fontWeight={400} lineHeight={'28px'} my={'24px'} fontSize={'14px'}>
                Lorem ipsum dolor sit amet consectetur. Consectetur porttitor ac volutpat imperdiet at quam senectus
                risus. Sagittis vitae quis luctus neque nibh auctor amet. Vitae tincidunt amet enim cursus amet elit.
            </Text>

            <Flex
                borderBottom={'1px'}
                borderColor={'brand'}
                borderRadius={'full'}
                maxW={'sm'}
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
                                textColor={activeFilter === filterOption ? 'white' : '#636363'}
                                px={'16px'}
                                style={{transition: 'background-color .1s ease-in-out'}}
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

            <SimpleGrid columns={{base: 2, lg: 3}} gap={5}>
                {
                    projects.length > 0 ?
                        projects.map(
                            (project, index) => {
                                return <GridItem
                                    key={index}
                                    backgroundImage={`url(${project.imgUrl})`}
                                    backgroundPosition={'center'}
                                    backgroundSize={'cover'}
                                    borderRadius={'8px'}
                                >
                                    <Flex
                                        alignItems={'start'}
                                        _hover={{
                                            backdropFilter: 'blur(0px)'
                                        }}
                                        borderRadius={'8px'}
                                        flexDirection={'column'}
                                        justifyContent={'space-between'}
                                        p={'10px'}
                                        h={'250px'}
                                        style={{backdropFilter: 'blur(2px)'}}
                                        background={'linear-gradient(180deg, rgb(0 0 0 / 39%) 17.71%, rgb(0 0 0 / 76%) 71.87%)'}>
                                        <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                              fontWeight={'300'}>{project.type}</Text>
                                        <div>
                                            <Text className={jua.className} mb={'16px'} fontSize={'16px'}
                                                  fontWeight={400}
                                                  textColor={'white'}>
                                                {project.title}
                                            </Text>
                                            {
                                                project.startDate !== "" ?
                                                    <div>
                                                        <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                                              fontWeight={'300'}>Start</Text>
                                                        <Text fontWeight={'300'}
                                                              fontSize={'12px'}>{project.startDate}</Text>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                            {
                                                project.endDate !== "" ?
                                                    <div>
                                                        <Text textColor={'rgba(246,246,246,0.6)'} fontSize={'12px'}
                                                              fontWeight={'300'}>End</Text>
                                                        <Text fontWeight={'300'}
                                                              fontSize={'12px'}>{project.endDate}</Text>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </div>
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
    )
}

export default ProjectsSections