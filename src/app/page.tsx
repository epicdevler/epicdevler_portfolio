'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {TechnologiesSection} from "@/app/home/sections/technologies/TechnologiesSection";
import ProjectsSections from "@/app/home/sections/projects/ProjectsSections";

const theme = extendTheme({
        colors: {
            brand: '#6842EF',
            white: '#F6F6F6'
        },
    }
)
export default function Home() {

    return (
        <ChakraProvider theme={theme}>
            <HeroSection/>
            <main>
                <TechnologiesSection/>
                <ProjectsSections/>
            </main>
        </ChakraProvider>
    )
}
