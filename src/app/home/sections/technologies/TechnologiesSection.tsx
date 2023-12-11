import { Box, Container, GridItem, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "@/app/components/_section_title";
import { Technology, TechnologyItem } from "../../../../../sanity/schemas/technology";
import Link from "next/link";

export default function TechnologiesSection({ data }: { data: Technology[] }) {
    const errorTextColor = useColorModeValue("blackAlpha.400", "whiteAlpha.400")
    let mainData;
    if (data.length > 0) {
        const technology = data[0]

        mainData = (
            technology.technologies.length < 1
                ? <Box
                    py={10}
                    w={'full'}
                    textAlign={'center'}
                    textColor={errorTextColor}
                >
                    <Text>
                        No Technologies yet
                    </Text>
                </Box>
                :
                <Box>
                    <p style={{ fontSize: '14px', fontWeight: 400 }}>{technology.briefMessage}</p>
                  
                    <SimpleGrid mt={5} columns={{ base: 3, sm: 3, lg: 5 }} gap={5}>
                        {
                            technology.technologies.map(
                                (technology: TechnologyItem, index: number) => {
                                    return <GridItem display={'flex'} justifyContent={'center'}
                                        alignItems={'center'}
                                        colSpan={'auto'} key={index} style={{ padding: '16px' }}>

                                        <Image width={48} height={48} src={technology.iconUrl}
                                            alt={technology.alt} />
                                    </GridItem>
                                }
                            )
                        }
                    </SimpleGrid>

                    <p
                        style={{
                            fontWeight: 'normal',
                            fontSize: '14px',
                            marginTop: '100px',
                            textAlign: 'center'
                        }}
                    >What have you <Link
                        href={'#projects'}
                        style={{
                            fontWeight: '400',
                            border: '1px solid white',
                            borderRadius: '100px',
                            padding: '5px'
                        }}
                    >
                            done?
                        </Link> with this technologies</p>
                </Box>
        )
    } else {
        mainData = <Box
            py={10}
            w={'full'}
            textAlign={'center'}
            textColor={errorTextColor}
        >
            <Text>
                No Technologies yet
            </Text>
        </Box>
    }
    return (
        <Container as={'section'} maxW={'container.lg'} py={100}>
            <div id="myStacks">
                <SectionTitle labelInFront={'Technology'} labelBehind={'Stacks'} />
                {mainData}
            </div>
        </Container>
    );
}