import {Container, GridItem, SimpleGrid} from "@chakra-ui/react";
import Image from "next/image";

export function TechnologiesSection() {
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

    technologies.forEach(
        value => {

        }
    )
    return (
        <section>
            <Container maxW={'container.lg'} py={100}>
                <h2>Technologies</h2>
                <p>I have experience with</p>

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
        </section>
    );
}