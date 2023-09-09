'use client'
import HeroSection from "@/app/home/sections/hero/Hero";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import {TechnologiesSection} from "@/app/home/sections/technologies/TechnologiesSection";

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
            <main>
                <HeroSection/>
                <TechnologiesSection />
            </main>
        </ChakraProvider>
    )
}
