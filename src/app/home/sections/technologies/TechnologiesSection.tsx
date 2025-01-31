import { Box, Container, Flex, GridItem, HStack, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import SectionTitle from "@/app/components/_section_title";
import { Technology, TechnologyItem } from "../../../../../sanity/schemas/technology";
import Link from "next/link";
import { APP_DATA } from "@/data/data/appData";

export default function TechnologiesSection({ data }: { data: Technology[] }) {
 
    return (
        <Box id="stacks" as={'section'} textColor={'white'} h='full' bg={'blackAlpha.900'} className="section">
            
        <Container maxW={'container.lg'} py={100} textColor={'white'}>
            <div id="myStacks">
                <SectionTitle labelInFront={'Technology'} labelBehind={'Stacks'} />
                <Box>
                                     
                    <SimpleGrid mt={5} columns={{ base: 3, sm: 3, lg: 5 }} gap={5}>
                        {
                            APP_DATA.technologies.map(
                                (tech, index: number) => {
                                    return <GridItem key={index} display={'flex'} justifyContent={'center'}
                                        alignItems={'center'}
                                        colSpan={'auto'}>

                                        <HStack transitionDuration={'.2s'} _hover={{bg:"whiteAlpha.100", borderColor:'whiteAlpha.50'}} borderWidth={1} borderColor={'whiteAlpha.100'} bg={'whiteAlpha.50'} w='full' h={'full'} rounded={'md'} p={2}>
                                        <Image width={32} height={32} src={`/techs/${tech.name}.svg`}
                                            alt={tech.name} />
                                            <Text>{tech.name}</Text>
                                        </HStack>
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
            </div>
        </Container>

        </Box>
    );
}