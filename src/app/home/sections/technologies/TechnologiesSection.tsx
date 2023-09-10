import {Container, GridItem, SimpleGrid} from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "@/app/components/_section_title";

export default function TechnologiesSection() {
    const technologies = [
        {
            url: '/technologies/FastAPI.svg',
            alt: 'FastAPI Logo',
        },
        {url: '/technologies/Figma.svg', alt: 'Figma Logo'},
        {url: '/technologies/Firebase.svg', alt: 'Firebase Logo'},
        {url: '/technologies/Git.svg', alt: 'Git Logo'},
        {url: '/technologies/GitHub.svg', alt: 'GitHub Logo'},
        {url: '/technologies/Kotlin.svg', alt: 'Kotlin Logo'},
        {url: '/technologies/Ktor.svg', alt: 'Ktor Logo'},
        {url: '/technologies/Python.svg', alt: 'Python Logo'},
        {url: '/technologies/MongoDB.svg', alt: 'MongoDB Logo'},
    ]

    return (
        <Container as={'section'} maxW={'container.lg'} py={100}>
            <SectionTitle labelInFront={'Technology'} labelBehind={'Stacks'}/>
            <p style={{fontSize: '14px', fontWeight: 400}}>I have experience with</p>

            <SimpleGrid mt={5} columns={{base: 3, sm: 3, lg: 5}} gap={5}>
                {
                    technologies.map(
                        (technology, index) => {
                            return <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'}
                                             colSpan={'auto'} key={index} style={{padding: '16px'}}>
                                <Image width={48} height={48} src={technology.url} alt={technology.alt}/>
                            </GridItem>
                        }
                    )
                }
            </SimpleGrid>
        </Container>
    );
}